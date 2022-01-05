import React from 'react';
import i from './AddEditDevice.module.css';
import {CONTROL_TYPE, CONNECTED} from "../../store/MockDevices";
import {useSelector} from "react-redux";

import {Dropdown, FormLabel, FormControl, FormText, DropdownButton, FormSelect} from "react-bootstrap";
//import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Heater from "../../store/images/Heater.jpg";
//import DeviceTab from "../DeviceTabList/DeviceTab/DeviceTab";

const AddEditDevice = (props) => {
    let device_name = props.name;
    let protocols = props.protocols;

    let protocol_list = protocols.map(protocol =>
        <option key={protocol.id} value={protocol.id}>{protocol.name}</option>
    );

    const handleButton = () => {
        console.log("handleButton in AddEditDevice");
       // console.log("id: 4");
        console.log("device_name: " + device_name);
        console.log("protocol: " + protocols[0].name);
        console.log("connection: " + CONNECTED);
        console.log("control_type: " + CONTROL_TYPE.SWITCHER);
        console.log("image: no img yet");

        props.onAddEdit(//4,
            device_name,
            protocols[0].name,
            CONNECTED,
            CONTROL_TYPE.SWITCHER);
    }
    return (
        <div className={i.page}>
            <FormText>TODO: add something to choose device icon</FormText>

            <div>
                <FormLabel>Device name:</FormLabel>
                <FormControl placeholder={device_name}/>
                <FormLabel className="text-muted">'Speakers' for example</FormLabel>
            </div>

            <div>
                <FormLabel>Protocol:</FormLabel>
                <FormSelect>
                    {protocol_list}
                </FormSelect>
            </div>

            <div>
                <FormLabel>Control type:</FormLabel>
                <FormSelect>
                    <option value="1">Toggle</option>
                    <option value="2">Slider</option>
                    <option value="3">Value</option>
                </FormSelect>
                <FormText className="text-muted">TODO: get the list of available protocols thought props and create
                    options with map</FormText>
            </div>

            <Button variant="primary" type="button" onClick={handleButton}>
                Add/Save
            </Button>
            <div>
                <FormText className="text-muted">TODO: add logic to button</FormText>
            </div>
        </div>
    );
};
export default AddEditDevice;