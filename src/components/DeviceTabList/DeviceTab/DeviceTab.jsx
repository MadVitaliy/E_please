import React from 'react';
import i from './DeviceTab.module.css';
import './toggle.css';
import {Container, Col, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import Button from "react-bootstrap/Button";
import {TrashFill, GearFill} from "react-bootstrap-icons";
import {control_types} from "../../../redux/Mocks/DeviceControlTypesMock";
import {protocols} from "../../../redux/Mocks/DeviceProtocolsMock";

/*
*   TODO: create DeviceTabContainer component.
*   In container component: check control type and create control tool:
*   toggle or slider or value field
*   and pass it into this component
*/

const DeviceTab = (props) => {

    let device = props.device;

    const PrintDevice = (device) => {
        console.log("DeviceTab");
        console.log("id: " + device.id);
        console.log("device_name: " + device.name);
        console.log("protocol: " + device.protocol);
        console.log("connection: " + device.status);
        console.log("control_type: " + device.control_type);
        console.log("image: no img yet");
        console.log(" ");
    };
    PrintDevice(device);
    return (
        <Container fluid className={i.tab}>
            <Row>
                <Col className={i.border}>
                    <div>
                        <img src={device.img} width="100" height="100"/>
                    </div>

                    <p>Device id: <b>{device.id}</b></p>
                    <p>Name: <b>{device.name}</b></p>
                    <p>Status: <b>{device.status ? "connected" : "disconnected"}</b></p>
                    <p>Use <b>{protocols[device.protocol].name}</b> protocol</p>
                    <p>Control_type: <b>{control_types[device.control_type].name}</b></p>
                </Col>
                <Col className={i.border}>
                    <p>here should be the passed control tool</p>
                    {/*{props.control_tool}*/}
                </Col>
                <Col className={i.border}>
                    <p>update button</p>
                    <NavLink to={{
                        pathname: '/updatedevice',
                        aboutProps: {
                            device: device,
                        }
                    }}>
                        <Button
                            type="button"
                            variant="primary"
                            className={i.button}
                        >
                            <GearFill/>
                        </Button>
                    </NavLink>
                </Col>
                <Col className={i.border}>
                    <p>delete button</p>
                    <Button
                        type="button"
                        variant="primary"
                        className={i.button}
                        onClick={(e) => {props.deleteDevice(device)}}
                    >
                        <TrashFill/>
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};
export default  DeviceTab;