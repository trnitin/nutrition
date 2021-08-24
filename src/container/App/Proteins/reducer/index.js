import initialState from '../../../../Store/initialState';
import * as constant from '../constants/constants';


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case constant.LOAD_PROTEIN_DATA:
            return {
                ...state,
                protein: action.payload
            };
        case "INCREASE_COUNTER":
            console.log(action.value, state)
            return {
                ...state,
                counter: state.counter + action.value
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