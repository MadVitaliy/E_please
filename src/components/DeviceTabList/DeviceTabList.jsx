import React from 'react';
import i from './DeviceTabList.module.css';
import DeviceTab from "../DeviceTabList/DeviceTab/DeviceTab";
import {LogDevice} from "../../utils/utils";
import {Container} from "react-bootstrap";


const DeviceTabList = (props) => {
    // let devices = props.devices;
    let device_tabs = props.devices.map((device) => {
            return <DeviceTab key={device.id} device={device} deleteDevice={props.deleteDevice}/>
        }
    );
    return (
        <Container fluid className={i.page}>
            {device_tabs}
        </Container>
    );
};
export default DeviceTabList;