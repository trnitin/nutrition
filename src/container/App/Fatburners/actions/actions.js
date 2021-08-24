import * as constants from '../constants/constant';

export function load_fatburn_data(payload) {
    return {
        type: constants.LOAD_FATBURN_DATA,
        payload
    }
}