import React from 'react';
import i from './Homepage.module.css';
import DeviceTab from "./DeviceTab/DeviceTab";
import {useSelector} from "react-redux";

const Homepage = () => {
    let devices = useSelector(state => state.devices);
    const device_tabs = devices.map((device) =>
        <DeviceTab device={device}/>
    );
    return (
        <div className={i.page}>
            {device_tabs}
        </div>
    );
};
export default Homepage;