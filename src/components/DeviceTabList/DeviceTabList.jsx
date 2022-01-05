import React from 'react';
import i from './DeviceTabList.module.css';
import DeviceTab from "../DeviceTabList/DeviceTab/DeviceTab";


const DeviceTabList = (props) => {
    let devices = props.devices;
    let device_tabs = devices.map((device) =>
        <DeviceTab key={device.id} device={device}/>

    );
    return (
        <div className={i.page}>
            {device_tabs}
        </div>
    );
};
export default DeviceTabList;