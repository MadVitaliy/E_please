import React from 'react';

import {useDispatch} from "react-redux";

import {AddDevice} from "../../redux/DeviceActions";
import DeviceAddEdit from "./DeviceAddEdit";
import {control_types} from "../../redux/Mocks/DeviceControlTypesMock";
import {protocols} from "../../redux/Mocks/DeviceProtocolsMock";
//import {useLocation} from "react-router-dom";


const AddEditDeviceContainer = (props) => {
    //TODO: get protocols list from store
    //TODO: get control_type list from store

   // let location = useLocation();

    console.log("AddEditDeviceContainer");

    let device = props.location.aboutProps.device;
    console.log("device");
    console.log(device);
    console.log("id: " + device.id);
    console.log("name: " + device.name);
    console.log("protocol: " + device.protocol);
    console.log("control_type: " + device.control_type);

    const dispatch = useDispatch();
    const handleAdd = (//id,
                       name,
                       protocol,
                       status,
                       control_type) => {
        // dispatch(
        //     AddDevice(//id,
        //         name,
        //         protocol,
        //         status,
        //         control_type));

        console.log("handleAdd in AddEditDeviceContainer");
        console.log("device_name: " + name);
        console.log("protocol: " + protocol);
        console.log("control_type: " + control_type);
        console.log("image: no img yet");
        console.log(" ");
    }

    let device_default_name = "Enter device name";
    return (
        <DeviceAddEdit name={device.name}
                       protocols={protocols}
                       control_types={control_types}
                       onAddEdit={handleAdd}
                       button_text = "Save Changes"/>
    );
};

export default AddEditDeviceContainer;