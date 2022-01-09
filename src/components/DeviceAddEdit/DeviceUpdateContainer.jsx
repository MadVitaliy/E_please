import React from 'react';

import DeviceAddUpdate from "./DeviceAddUpdate";
import {control_types} from "../../redux/Mocks/DeviceControlTypesMock";
import {protocols} from "../../redux/Mocks/DeviceProtocolsMock";
import {updateDeviceAC} from "../../redux/DeviceReducer";
import {connect} from "react-redux";
import {LogDevice} from "../../utils/utils";
//import {useLocation} from "react-router-dom";


const DeviceUpdateContainer = (props) => {
    //TODO: get protocols list from store
    //TODO: get control_type list from store

    console.log("DeviceUpdateContainer");
    const updateDevice = (device) => {
        console.log("handleAdd in DeviceUpdateContainer");
        LogDevice(device);
        console.log(" ");

        props.updateDevice(device);
    }

    return (
        <DeviceAddUpdate device={props.location.aboutProps.device}
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
        updateDevice: (device) => {
            dispatch(updateDeviceAC(device));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeviceUpdateContainer);
//export default DeviceUpdateContainer;