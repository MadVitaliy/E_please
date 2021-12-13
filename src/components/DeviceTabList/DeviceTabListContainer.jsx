import React from 'react';

import {useSelector} from "react-redux";
import DeviceTabList from "./DeviceTabList";

const DeviceTabListContainer = () => {
    let devices = useSelector((state) => state.devices);
    return (
        <DeviceTabList devices={devices}/>
    );
};

export default DeviceTabListContainer;