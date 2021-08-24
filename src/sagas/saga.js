import { put, takeEvery, all, call, takeLatest } from 'redux-saga/effects';
// import request from '../utils/request';
import * as constants from '../container/App/Proteins/constants/constants';
import * as actions from '../container/App/Proteins/actions/actions'
import * as fatconstants from '../container/App/Fatburners/constants/constant';
import * as fatactions from '../container/App/Fatburners/actions/actions'

function* helloSaga() {
    console.log('Hello Sagas!')
}


const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return { data: data, status: response.status }
    }
    catch (e) {
        console.log(e)
    }
}

export function* get_protein_data() {
    console.log("caught you")
    // let proteinresponse;
    try {
        const proteinresponse = yield call(fetchData, 'https://nutrition-82325.firebaseio.com/asa.json');
        console.log('Trial Response>>>>>>>>>>>>', proteinresponse.status);
        yield put(actions.load_protein_data(proteinresponse.data));

    }
    catch (err) {
        console.log(err)
    }
}

// export function* get_fatburn_data() {
//     console.log("caught you")
//     let fatresponse;
//     try {
//         fatresponse = yield call(request, 'https://nutrition-82325.firebaseio.com/protein.json',
//             {
//                 method: 'get',
//                 headers: {
//                     'Accept': 'application/json', 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': ' * '
//                 },
//                 // mode: 'no-cors',
//                 body: JSON.stringify(fatresponse)
//             });
//         console.log('Trial Response>>>>>>>>>>>>', fatresponse);

//         yield put(fatactions.load_fatburn_data(fatresponse));

//     }
//     catch (err) {
//         console.log(err)
//     }
// }



export function* get_fatburn_data() {
    console.log("caught you")
    try {
        const fatresponse = yield call(fetchData, "https://nutrition-82325.firebaseio.com/protein.json");
        console.log(fatresponse.status, "status")
        yield put(fatactions.load_fatburn_data(fatresponse.data));
    }
    catch (err) {
        console.log(err)
    }

}



//   function* watchIncrementAsync() {
//     yield takeEvery('INCREMENT_ASYNC', incrementAsync)
//   }

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* firstSaga() {

    // yield all([helloSaga()]),
    yield all([
        helloSaga(),
    ])
    yield takeLatest(constants.GET_PROTEIN_DATA, get_protein_data)
    yield takeLatest(fatconstants.GET_FATBURN_DATA, get_fatburn_data)
}
