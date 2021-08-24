import initialState from './initialState'
import { combineReducers } from 'redux';

import proteinReducer from '../container/App/Proteins/reducer/index'
import fatReducer from '../container/App/Fatburners/reducer/index';


const rootReducer = combineReducers({ pro: proteinReducer, fat: fatReducer })

export default rootReducer