import {combineReducers} from "redux";

import {deviceReducer} from "./DeviceReducer.js";

export const rootReducer = combineReducers({
    devices: deviceReducer,
});