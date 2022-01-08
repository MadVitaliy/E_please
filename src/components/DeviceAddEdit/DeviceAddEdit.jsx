import React from 'react';
import i from './DeviceAddEdit.module.css';
import {CONNECTED} from "../../store/Mocks/DevicesMock";

import {FormLabel, FormControl, FormText, FormSelect} from "react-bootstrap";
import Button from "react-bootstrap/Button";

//import DeviceTab from "../DeviceTabList/DeviceTab/DeviceTab";

const DeviceAddEdit = (props) => {

    let select_protocol_ref = React.createRef();
    let select_control_type_ref = React.createRef();
    let protocols = props.protocols;
    let control_types = props.control_types;

    let device_name_field;
    let device_name = props.name;
    if(device_name != null ){
        device_name_field = (
            <div>
                <FormLabel>Device name:</FormLabel>
                <FormControl value={device_name}/>
                <FormLabel className="text-muted">'Speakers' for example</FormLabel>
            </div>
        );

    } else {
        device_name = "Enter device name";
        device_name_field = (
            <div>
                <FormLabel>Device name:</FormLabel>
                <FormControl placeholder={device_name}/>
                <FormLabel className="text-muted">'Speakers' for example</FormLabel>
            </div>
        );
    }

    const handleButton = () => {
        let protocol_index = select_protocol_ref.current.value;
        let control_type_index = select_control_type_ref.current.value;
        console.log("handleButton in AddEditDevice");
        console.log("device_name: " + device_name);
        console.log("protocol_index: " + protocol_index);
        console.log("protocol: " + protocols[protocol_index].name);
        console.log("control_type: " + control_type_index);
        console.log("image: no img yet");
        console.log(" ");

        props.onAddEdit(//4,
            device_name,
            protocols[protocol_index].name,
            !CONNECTED,
            control_type_index);
    }


    return (
        <div className={i.page}>
            <FormText>TODO: add something to choose device icon</FormText>

            {device_name_field}

            <div>
                <FormLabel>Protocol:</FormLabel>

                <FormSelect ref={select_protocol_ref} onChange={() => {
                    console.log("select_protocol in AddEditDevice");
                    console.log("selected protocol: " + select_protocol_ref.current.value);
                    console.log(" ");
                }}>
                    {protocols.map(protocol =>
                        <option key={protocol.id} value={protocol.id}>{protocol.name}</option>
                    )}
                </FormSelect>
            </div>

            <div>
                <FormLabel>Control type:</FormLabel>
                <FormSelect ref={select_control_type_ref} onChange={()=>{
                    console.log("select_control_type in AddEditDevice");
                    console.log("selected control_type: " + select_control_type_ref.current.value);
                    console.log(" ");
                }}>
                    {control_types.map(control_type =>
                        <option key={control_type.id} value={control_type.id}>{control_type.name}</option>
                    )}
                </FormSelect>
                <FormText className="text-muted">TODO: get the list of available protocols thought props and create
                    options with map</FormText>
            </div>

            <Button variant="primary" type="button" onClick={handleButton}>
                {props.button_text}
            </Button>
            <div>
                <FormText className="text-muted">TODO: add logic to button</FormText>
            </div>
        </div>
    );
};
export default DeviceAddEdit;