import React from 'react';
import i from './DeviceTab.module.css';
import './toggle.css';

console.log(i);

const DeviceTab = (props) => {
    let device = props.device;
    var Toggle = require('react-toggle');
    return (
        <div className={i.tab}>
            <div>
                <img src={device.img} width="100" height="100"/>
            </div>
            <p>Device <b>{device.id}</b> <b>{device.name}</b> status: <b>{device.status ? "connected": "disconnected"}</b> </p>
            <p>Use <b>{device.protocol}</b> protocol, control_type: <>{device.control_type}</> </p>
                       
            <label class="switch">
                <input type="checkbox"/>
                <span class="slider round"></span>
            </label>
            
            
        </div>
    );
};
export default DeviceTab;