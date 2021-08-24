import initialState from '../../../../Store/initialState';
import * as constant from '../constants/constant';
import * as Type from '../actions/actions';


const reducer = (state = initialState, action) => {
    console.log(Type, "fdsdf11")
    switch (action.type) {
        case constant.LOAD_FATBURN_DATA:
            return {
                ...state,
                fatburner: action.payload
            };
        // case constant.SELECT_PRODUCT:
        //     return {
        //         ...state,
        //         selectedProduct: action.payload
        //     }
        default: return {
            ...state
        }
    }

}

export default reducer;