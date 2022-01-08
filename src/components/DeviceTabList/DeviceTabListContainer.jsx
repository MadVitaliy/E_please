import React from 'react';
import {connect} from "react-redux";
import {addDeviceAC, updateDeviceAC, deleteDeviceAC, setDevicesAC} from "../../redux/DeviceReducer"
import {deviceList} from "../../redux/Mocks/DevicesMock";

import DeviceTabList from "./DeviceTabList";


const DeviceTabListContainer = (props) => {
   props.setDevices(deviceList);

    return (
        <DeviceTabList devices={props.devices}/>
    );
};

let mapStateToProps = (state) => {
    return {
        devices: state.devicesPage.devices
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addDevice: (device) => {
            dispatch(addDeviceAC(device));
        },
        updateDevice: (device) => {
            dispatch(updateDeviceAC(device));
        },
        deleteDevice: (deviceId) => {
            dispatch(deleteDeviceAC(deviceId));
        },
        setDevices: (devices) => {
            dispatch(setDevicesAC(devices));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DeviceTabListContainer);