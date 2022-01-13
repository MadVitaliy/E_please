import React from 'react';
import {addDeviceAC} from "../../redux/DeviceReducer";
import {connect} from "react-redux";
import DeviceAddUpdate from "./DeviceAddUpdate";
import {protocols} from "../../redux/Mocks/DeviceProtocolsMock";
import {control_types} from "../../redux/Mocks/DeviceControlTypesMock";
import {LogDevice} from "../../utils/utils";
import {CONNECTED, CONTROL_TYPE} from "../../redux/Mocks/DevicesMock";
import {Lamp} from "react-bootstrap-icons";

class DeviceAddContainer extends React.Component {
    //TODO: get protocols list from store
    //TODO: get control_type list from store
    constructor(props) {
        super(props);
        this.state = {
            device: {
                id: 10,
                name: "Enter device name",
                protocol: protocols[0].id,
                status: !CONNECTED,
                control_type: CONTROL_TYPE.SWITCHER,
                img: Lamp
            }
        };
    }

    componentDidMount() {
        console.log("DeviceAddContainerMount");
    }

    onNameChange = (e) => {
        this.setState({form_device_name: e.target.value});
        console.log(this.state.form_device_name);
    }

    addDevice = (new_device) => {
        console.log("handleAdd in DeviceAddContainer");
        LogDevice(new_device);
        this.props.addDevice(JSON.parse(JSON.stringify(new_device)));
    }

    render() {
        return (
            <DeviceAddUpdate device={JSON.parse(JSON.stringify(this.state.device))}
                             protocols={protocols}
                             control_types={control_types}
                             button_text="Add"
                             onSubmit={this.addDevice}
                             new_device={true}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {}
}

let mapDispatchToProps = (dispatch) => {
    return {
        addDevice: (device) => {
            dispatch(addDeviceAC(device));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeviceAddContainer);