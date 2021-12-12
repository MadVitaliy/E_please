import React from 'react';

import {useSelector} from "react-redux";
import AddEditDevice from "./AddEditDevice";

const AddEditDeviceContainer = () => {
    let device_default_name = "Enter device name";
    //TODO: get protocols list from store
    let protocols = ["Protocol #1", "Protocol #2","Protocol #3"];

    return (
        <AddEditDevice name = {device_default_name} protocols = {protocols}/>
    );
};

export default AddEditDeviceContainer;