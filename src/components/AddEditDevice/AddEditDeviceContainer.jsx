import React from 'react';

import {useDispatch, useSelector} from "react-redux";

import {AddDevice} from "../../store/DeviceActions";
import AddEditDevice from "./AddEditDevice";
import Heater from "../../store/images/Heater.jpg";
import Lamp from "../../store/images/Lamp.jpg";
import Backlight from "../../store/images/Backlight.jpg";
import {CONNECTED, CONTROL_TYPE} from "../../store/Mocks/DevicesMock";


const AddEditDeviceContainer = () => {

    //TODO: get protocols list from store
    let protocols = [
        {
            id: 0,
            name: "Protocol #1",
        },
        {
            id: 1,
            name: "Protocol #2",
        },
        {
            id: 2,
            name: "Protocol #3",
        }
    ];

    //TODO: get control_type list from store
    let control_types = [
        {
            id: 0,
            name: "Toggle",
        },
        {
            id: 1,
            name: "Slider",
        },
        {
            id: 2,
            name: "Value",
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
        console.log("device_name: " + name);
        console.log("protocol: " + protocol);
        console.log("control_type: " + control_type);
        console.log("image: no img yet");
        console.log(" ");
    }

    let device_default_name = "Enter device name";
    return (
        <AddEditDevice name={device_default_name}
                       protocols={protocols}
                       control_types={control_types}
                       onAddEdit={handleAdd}/>
    );
};

export default AddEditDeviceContainer;