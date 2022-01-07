import React from 'react';

import {useDispatch} from "react-redux";

import {AddDevice} from "../../store/DeviceActions";
import DeviceAddEdit from "./DeviceAddEdit";
import {control_types} from "../../store/Mocks/DeviceControlTypesMock";
import {protocols} from "../../store/Mocks/DeviceProtocolsMock";



const DeviceAddContainer = (props) => {
    //TODO: get protocols list from store
    //TODO: get control_type list from store

    const dispatch = useDispatch();

    const handleAdd = (//id,
                       name,
                       protocol,
                       status,
                       control_type) => {
        dispatch(
            AddDevice(//id,
                name,
                protocol,
                status,
                control_type));

        console.log("handleAdd in AddEditDeviceContainer");
        console.log("device_name: " + name);
        console.log("protocol: " + protocol);
        console.log("control_type: " + control_type);
        console.log("image: no img yet");
        console.log(" ");
    }

    let device_default_name = "Enter device name";
    return (
        <DeviceAddEdit name={device_default_name}
                       protocols={protocols}
                       control_types={control_types}
                       onAddEdit={handleAdd}
                       button_text = "Add"/>

    );
};

export default DeviceAddContainer;