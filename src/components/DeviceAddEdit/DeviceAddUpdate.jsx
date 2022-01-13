import React from 'react';
import i from './DeviceAddUpdate.module.css';
//import {CONNECTED, CONTROL_TYPE} from "../../redux/Mocks/DevicesMock";

import {FormLabel, FormControl, FormText, FormSelect} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {LogDevice} from "../../utils/utils";

class DeviceAddUpdate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            device:  this.props.device,
            new_device: props.new_device
        };

        console.log("DeviceUpdate");
    }

    TextField = () => {
        if(this.state.new_device)
            return (<div>
                <FormLabel>Device name:</FormLabel>
                <FormControl placeholder={"Enter device name"} onChange={(e) => {
                    this.setState({
                        device: {
                            id: this.state.device.id,
                            name: e.target.value,
                            protocol: this.state.device.protocol,
                            status: this.state.device.status,
                            control_type: this.state.device.control_type,
                            img: this.state.device.img
                        }
                    })
                }}/>
                <FormLabel className="text-muted">'Speakers' for example</FormLabel>
            </div>)

        return (<div>
            <FormLabel>Device name:</FormLabel>
            <FormControl value={this.state.device.name} onChange={(e) => {
                this.setState({
                    device: {
                        id: this.state.device.id,
                        name: e.target.value,
                        protocol: this.state.device.protocol,
                        status: this.state.device.status,
                        control_type: this.state.device.control_type,
                        img: this.state.device.img
                    }
                })
            }}/>
            <FormLabel className="text-muted">'Speakers' for example</FormLabel>
        </div>)
    }

    buttonHandler = () => {
        // console.log("buttonHandler");
        // LogDevice(this.state.device);
        ;
    }

    render() {
        return (
            <div className={i.page}>
                <FormText>TODO: add something to choose device icon</FormText>

                {this.TextField()}

                <div>
                    <FormLabel>Protocol:</FormLabel>
                    <FormSelect
                        value={this.state.device.protocol}
                        onChange={(e) => {
                            console.log(this.state.device.protocol)
                            this.setState({
                                device: {
                                    id: this.state.device.id,
                                    name: this.state.device.name,
                                    protocol: e.target.value,
                                    status: this.state.device.status,
                                    control_type: this.state.device.control_type,
                                    img: this.state.device.img
                                }
                            })
                            console.log("protocol e.target.valuee");
                            console.log(e.target.value);
                            console.log(this.state.device.protocol)
                        }}
                    >
                        {this.props.protocols.map(protocol =>
                            <option key={protocol.id}
                                    value={protocol.id}

                            >
                                {protocol.name}</option>
                        )}
                    </FormSelect>
                </div>

                <div>

                    <FormLabel>Control type:</FormLabel>
                    <FormSelect
                        value={this.state.device.control_type}
                        onChange={(e) => {
                            this.setState({
                                device: {
                                    id: this.state.device.id,
                                    name: this.state.device.name,
                                    protocol: this.props.protocol,
                                    status: this.state.device.status,
                                    control_type: e.target.value,
                                    img: this.state.device.img
                                }
                            })
                            console.log("control_type e.target.valuee");
                            console.log(e.target.value);
                        }}>

                        {this.props.control_types.map(control_type =>
                            <option key={control_type.id}
                                    value={control_type.id}
                            >
                                {control_type.name}
                            </option>
                        )}
                    </FormSelect>
                    <FormText className="text-muted">TODO: get the list of available protocols thought props and create
                        options with map</FormText>
                </div>

                <Button variant="primary" type="button" onClick={(e) => {
                    this.props.onSubmit(this.state.device);
                }}>
                    {this.props.button_text}
                </Button>
                <div>
                    <FormText className="text-muted">TODO: add logic to button</FormText>
                </div>
            </div>
        );
    }


}

export default DeviceAddUpdate;