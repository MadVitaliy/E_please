import React from 'react';
import i from './DeviceTabList.module.css';
import DeviceTab from "../DeviceTabList/DeviceTab/DeviceTab";
import {LogDevice} from "../../utils/utils";


const DeviceTabList = (props) => {
    // let devices = props.devices;
    let device_tabs = props.devices.map((device) => {
            return <DeviceTab key={device.id} device={device} deleteDevice={props.deleteDevice}/>
        }
    );
    return (
        <div className={i.page}>
            {device_tabs}
        </div>
    );
};
export default DeviceTabList;