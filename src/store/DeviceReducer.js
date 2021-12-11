import {deviceList} from './MockDevices'

export const deviceReducer = (state = deviceList, action) => {
    switch (action.state) {
        default:
            return state;
    }
}

