/* Reducer > index.js: Combined multiple reducer and export as single
                       unit
                       */
import { changeTheNumber } from "./upDown";
import { combineReducers } from "redux";
export const rootReducer = combineReducers( { changeTheNumber } );