import React from 'react';

import {useDispatch, useSelector} from "react-redux";

import {AddDevice} from "../../store/DeviceActions";
import AddEditDevice from "./AddEditDevice";
import Heater from "../../store/images/Heater.jpg";
import Lamp from "../../store/images/Lamp.jpg";
import Backlight from "../../store/images/Backlight.jpg";
import {CONNECTED, CONTROL_TYPE} from "../../store/MockDevices";


const AddEditDeviceContainer = () => {
    let device_default_name = "Enter device name";
    //TODO: get protocols list from store
    let protocols = [
        {
            id: 1,
            name: "Protocol #1",
        },
        {
            id: 2,
            name: "Protocol #2",
        },
        {
            id: 3,
            name: "Protocol #3",
        }
    ];

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
        //console.log("id: " + id);
        console.log("device_name: " + name);
        console.log("protocol: " + protocol);
        console.log("connection: " + status);
        console.log("control_type: " + control_type);
        console.log("image: no img yet");
    }
    return (
        <AddEditDevice name={device_default_name} protocols={protocols} onAddEdit={handleAdd}/>
    );
};

export default AddEditDeviceContainer;