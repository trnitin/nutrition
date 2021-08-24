import * as constants from '../constants/constants';

export function load_protein_data(payload) {
    return {
        type: constants.LOAD_PROTEIN_DATA,
        payload
    }
}