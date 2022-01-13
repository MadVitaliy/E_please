import React from 'react';
import i from './DeviceTab.module.css';
import './toggle.css';
import {Col, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import Button from "react-bootstrap/Button";
import {TrashFill, GearFill} from "react-bootstrap-icons";
import {control_types} from "../../../redux/Mocks/DeviceControlTypesMock";
import {protocols} from "../../../redux/Mocks/DeviceProtocolsMock";
import {RangeStepInput} from 'react-range-step-input';
import {CONTROL_TYPE} from "../../../redux/Mocks/DevicesMock";
import {LogDevice} from "../../../utils/utils";


const DeviceTab = (props) => {

    let device = props.device;
    let control_type = device.control_type;
    let sliderComp = (<RangeStepInput/>);
    let toggleComp = (
        <>
            <label class="switch">
                <input type="checkbox"/>
                <span class="slider round"/>
            </label>
        </>);
    let valueComp = (
        <>
            <label>Go to </label>
            <input type="number" defaultValue={0}/>
        </>);
    let defaultComp = (<> lol</>);

    const controlElement = () => {
        switch (Number(control_type)) {
            case CONTROL_TYPE.SWITCHER: {
                return toggleComp;
            }
            case CONTROL_TYPE.SLIDER: {
                return sliderComp;
            }
            case CONTROL_TYPE.VALUE: {
                return valueComp;
            }
            default: {
                return defaultComp;
            }
        }
    }

    console.log("DeviceTab");
    LogDevice(device);
    return (
        <Row className={i.tab}>
            <Col xl={1} className={i.border}>
                <img src={device.img} width="100" height="100"/>
            </Col>
            <Col className={i.border}>
                <p>Device id: <b>{device.id}</b></p>
                <p>Name: <b>{device.name}</b></p>
                <p>Status: <b>{device.status ? "connected" : "disconnected"}</b></p>
                <p>Use <b>{protocols[device.protocol].name}</b> protocol</p>
                <p>Control_type: <b>{control_types[device.control_type].name}</b></p>
            </Col>
            <Col xl={2} className={i.border}>
                {controlElement(device.control_type)}
            </Col>
            <Col xl={1} className={i.border}>
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
            <Col xl={1} className={i.border}>
                <Button
                    type="button"
                    variant="primary"
                    className={i.button}
                    onClick={(e) => {
                        props.deleteDevice(device)
                    }}
                >
                    <TrashFill/>
                </Button>
            </Col>
        </Row>
    );
};
export default DeviceTab;