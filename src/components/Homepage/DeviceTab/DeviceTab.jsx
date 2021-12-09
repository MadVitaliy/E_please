import React from 'react';
import i from './DeviceTab.module.css';

console.log(i);

const DeviceTab = (props) => {
    let device = props.device;
    return (
        <div className={i.tab}>
            <p>Device <b>{device.id}</b> <b>{device.name}</b> status: <b>{device.status ? "connected": "disconnected"}</b> </p>
            <p>Use <b>{device.protocol}</b> protocol, control_type: <>{device.control_type}</> </p>
        </div>
    );
};
export default DeviceTab;