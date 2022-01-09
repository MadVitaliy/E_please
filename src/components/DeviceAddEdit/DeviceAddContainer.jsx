import React from 'react';
import {addDeviceAC} from "../../redux/DeviceReducer";
import {connect} from "react-redux";
import DeviceAddUpdate from "./DeviceAddUpdate";
import {protocols} from "../../redux/Mocks/DeviceProtocolsMock";
import {control_types} from "../../redux/Mocks/DeviceControlTypesMock";
import {LogDevice} from "../../utils/utils";

const DeviceAddContainer = (props) => {
    //TODO: get protocols list from store
    //TODO: get control_type list from store

    console.log("DeviceAddContainer");
    const updateDevice = (device) => {
        console.log("updateDevice in DeviceAddContainer");
        LogDevice(device);
        props.addDevice(device);
    }
    //let device_default_name = "Enter device name";


    return (
        <DeviceAddUpdate
                         onAddEdit={updateDevice}
                         protocols={protocols}
                         control_types={control_types}
                         button_text="Save Changes"/>
    );
};

let mapStateToProps = (state) => {
    return {}
}

let mapDispatchToProps = (dispatch) => {
    return {
        addDevice: (device) => {
            dispatch(addDeviceAC(device));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeviceAddContainer);