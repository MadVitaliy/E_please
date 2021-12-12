import {deviceList} from './MockDevices'
import {DEVICE_ACTION} from "./DeviceActions";

export const deviceReducer = (state = deviceList, action) => {
    switch (action.state) {
        case DEVICE_ACTION.ADD_DEVICE: {
            const device = action.payload;
            return [...state, device];
        }
        case DEVICE_ACTION.UPDATE_DEVICE_NAME:{
            const { id, new_name } = action.payload;
           // const device = action.payload;
            return [
                ...state.map((device_from_list) => {
                    if (device_from_list.id === id) {
                        return {
                            ...device_from_list,
                            new_name,
                        };
                    }
                    return device_from_list;
                }),
            ];
        }
        case DEVICE_ACTION.DELETE_DEVICE: {
            const {id} = action.payload;
            return [...state.filter((device_from_list) => device_from_list.id !== id)];
        }
        case DEVICE_ACTION.INIT_DEVICES:
            return action.payload;
        default:
            return state;
    }
}

