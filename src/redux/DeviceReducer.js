import {CONNECTED, CONTROL_TYPE, deviceList} from './Mocks/DevicesMock'
import {DEVICE_ACTION} from "./DeviceActions";
import {LogDevice} from "../utils/utils";

let initialState = {
    devices: deviceList,
    total_devices_count: 0 //no usage at this time
};

export const deviceReducer = (state = initialState, action) => {
    console.log("deviceReducer: ");
    switch (action.type) {
        case DEVICE_ACTION.ADD_DEVICE: {
            console.log("DEVICE_ACTION.ADD_DEVICE");
            LogDevice(action.device);
            state.devices.push(action.device);
            return state;
        }
        case DEVICE_ACTION.UPDATE_DEVICE: {
            console.log("DEVICE_ACTION.UPDATE_DEVICE");
            const temp_device = action.device;
            const id = temp_device.id;
            const new_name = temp_device.name;
            const new_protocol = temp_device.protocol;
            const new_status = temp_device.status;
            const new_control_type = temp_device.control_type;

            LogDevice(temp_device);

            return {
                ...state,
                devices: state.devices.map(device_from_array => {
                    if (device_from_array.id === temp_device.id) {
                        console.log("device with id " + id + "was updated");
                        console.log("device_from_array");
                        console.log(device_from_array);
                        return {
                            ...device_from_array,
                            name: new_name,
                            protocol: new_protocol,
                            status: new_status,
                            control_type: new_control_type,
                        };
                    }
                    return device_from_array;
                })
            };
        }
        case DEVICE_ACTION.DELETE_DEVICE: {
            console.log("DEVICE_ACTION.DELETE_DEVICE");
            console.log("state");
            console.log(state);
            const {id} = action.deviceId;
            return {
                ...state,
                devices: state.devices.filter((device_from_array) => device_from_array.id !== id)
            }
        }
        case DEVICE_ACTION.SET_DEVICES: {
            console.log("DEVICE_ACTION.SET_DEVICES");
            return {...state, devices: action.devices};

        }
        case DEVICE_ACTION.GET_DEVICES: {
            console.log("DEVICE_ACTION.GET_DEVICES");
            return state.devices;

        }
        default:
            console.log("default");
            return state;
    }
}

export const addDeviceAC = (device) => ({type: DEVICE_ACTION.ADD_DEVICE, device: device});
export const updateDeviceAC = (device) => ({type: DEVICE_ACTION.UPDATE_DEVICE, device: device});
export const deleteDeviceAC = (deviceId) => ({type: DEVICE_ACTION.DELETE_DEVICE, deviceId: deviceId});
export const setDevicesAC = (devices) => ({type: DEVICE_ACTION.SET_DEVICES, devices: devices});
export const getDevicesAC = () => ({type: DEVICE_ACTION.GET_DEVICES});