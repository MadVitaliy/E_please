import React from 'react';
import i from './DeviceTab.module.css';
import './toggle.css';

console.log(i);

const DeviceTab = (props) => {
    let device = props.device;
    //var Toggle = require('react-toggle');

    const PrintDevice = (device) => {
        console.log("id: " + device.id);
        console.log("device_name: " + device.name);
        console.log("protocol: " + device.protocol);
        console.log("connection: " + device.status);
        console.log("control_type: " + device.control_type);
        console.log("image: no img yet");
    };
    PrintDevice(device);
    return (
        <div className={i.tab}>
            <div>
                <img src={device.img} width="100" height="100"/>
            </div>

            <p>Device id: <b>{device.id}</b></p>
            <p>Name: <b>{device.name}</b></p>
            <p>Status: <b>{device.status ? "connected" : "disconnected"}</b></p>
            <p>Use <b>{device.protocol}</b> protocol</p>
            <p>Control_type: <b>{device.control_type}</b></p>

            <label className="switch">
                <input type="checkbox"/>
                <span className="slider round"/>
            </label>
        </div>
    );
};
export default DeviceTab;