import {combineReducers, createStore} from "redux";
import {deviceReducer} from "./DeviceReducer";


let reducers = combineReducers({
    devicesPage: deviceReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
