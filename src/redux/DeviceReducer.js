import {CONNECTED, CONTROL_TYPE, deviceList} from './Mocks/DevicesMock'
import {DEVICE_ACTION} from "./DeviceActions";


let initialState = {
    devices: [ ],
    total_devices_count: 0 //no usage at this time
};

export const deviceReducer = (state = initialState, action) => {
    // console.log("deviceReducer: ");
    // console.log(deviceList);
    // console.log("action");
    // console.log(action);
    // console.log("state");
    // console.log(state);
    switch (action.type) {
        case DEVICE_ACTION.ADD_DEVICE: {
            const device = action.device;
            return [...state,  device];
        }
        case DEVICE_ACTION.UPDATE_DEVICE: {
            const temp_device = action.device;
            const id= temp_device.id;
            const new_name= temp_device.name;
            const new_protocol= temp_device.protocol;
            const new_status= temp_device.status;
            const new_control_type= temp_device.control_type;

            // const device = action.payload;
            return {
                ...state,
                devices: state.map((device_from_list) => {
                    if (device_from_list.id === id) {
                        return {
                            ...device_from_list,
                            name: new_name,
                            protocol: new_protocol,
                            status: new_status,
                            control_type: new_control_type,
                        };
                    }
                    return device_from_list;
                })
            };
        }
        case DEVICE_ACTION.DELETE_DEVICE: {
            const {id} = action.deviceId;
            return {...state,
                devices: state.filter((device_from_list) => device_from_list.id !== id)
            }
        }
        case DEVICE_ACTION.SET_DEVICES:
            return {...state, devices: action.devices};
        default:
            return state;
    }
}

export const addDeviceAC = (device) => ({type: DEVICE_ACTION.ADD_DEVICE, device: device});
export const updateDeviceAC = (device) => ({type: DEVICE_ACTION.UPDATE_DEVICE, device: device});
export const deleteDeviceAC = (deviceId) => ({type: DEVICE_ACTION.DELETE_DEVICE, deviceId: deviceId});
export const setDevicesAC = (devices) => ({type: DEVICE_ACTION.SET_DEVICES, devices: devices});