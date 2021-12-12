import React from 'react';
import i from './AddEditDevice.module.css';

import {Dropdown, FormLabel, FormControl, FormText, DropdownButton, FormSelect} from "react-bootstrap";
//import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import DeviceTab from "../DeviceTabList/DeviceTab/DeviceTab";

const AddEditDevice = (props) => {
    let device_name = props.name;
    let protocols = props.protocols;
    let protocol_list = protocols.map((device) =>
        <option value={device.index}>{device}</option>

    );
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
                <FormText className="text-muted">TODO: get the list of available protocols thought props and create options with map</FormText>
            </div>

            <Button variant="primary" type="submit">
                Add/Save
            </Button>
            <div>
                <FormText className="text-muted">TODO: add logic to button</FormText>
            </div>
        </div>
    );
};
export default AddEditDevice;