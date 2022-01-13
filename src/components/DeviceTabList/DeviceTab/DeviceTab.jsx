import React from 'react';
import i from './DeviceTab.module.css';
import './toggle.css';
import {Container, Col, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import Button from "react-bootstrap/Button";
import {TrashFill, GearFill} from "react-bootstrap-icons";
import {RangeStepInput} from 'react-range-step-input';


/*
*   TODO: create DeviceTabContainer component.
*   In container component: check control type and create control tool:
*   toggle or slider or value field
*   and pass it into this component
*/

const DeviceTab = (props) => {

    let device = props.device;
    let control_type = device.control_type;
    let sliderComp = (<> <RangeStepInput /></>) ; 
    let toggleComp = (<> <label class="switch">
                            <input type="checkbox"/>
                            <span class="slider round"></span>
                            </label></>);
    let valueComp = ( <><label>Go to </label>
                        <input type="number" defaultValue={0}  /> </>);
   

    const  controlElement = () =>{
        switch (control_type){
            case 0: {
                return toggleComp ;
            } 
            case 1: {
                return sliderComp ; 
            }  
            case 2: {
               return valueComp ;
            }
        }   
    }   

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
                    <p>Use <b>{device.protocol}</b> protocol</p>
                    <p>Control_type: <b>{device.control_type}</b></p>
                </Col>
                <Col className={i.border}>
                    <p>here should be the passed control tool</p>
                    {controlElement(device.control_type)}
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