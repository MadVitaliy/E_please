import React from 'react';

import DeviceAddUpdate from "./DeviceAddUpdate";
import {control_types} from "../../redux/Mocks/DeviceControlTypesMock";
import {protocols} from "../../redux/Mocks/DeviceProtocolsMock";
import {updateDeviceAC} from "../../redux/DeviceReducer";
import {connect} from "react-redux";
import {LogDevice} from "../../utils/utils";

class DeviceUpdateContainer extends React.Component {
    //TODO: get protocols list from store
    //TODO: get control_type list from store
    constructor(props) {
        super(props);
        let device = this.props.location.aboutProps.device;
        this.state = {
            device: JSON.parse(JSON.stringify(device))
        };
    }

    componentDidMount() {
        console.log("DeviceUpdateContainerMount");
    }

    onNameChange = (e) => {
        this.setState({form_device_name: e.target.value});
        console.log(this.state.form_device_name);
    }

    updateDevice = (updated_device) => {
        console.log("handleAdd in DeviceUpdateContainer");
        LogDevice(updated_device);
        this.props.updateDevice(JSON.parse(JSON.stringify(updated_device)));
    }

    render() {
        return (
            <DeviceAddUpdate device={JSON.parse(JSON.stringify(this.state.device))}
                             protocols={protocols}
                             control_types={control_types}
                             button_text="Save Changes"
                             onSubmit={this.updateDevice}
                             new_device={false}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {}
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateDevice: (device) => {
            dispatch(updateDeviceAC(device));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeviceUpdateContainer);
//export default DeviceUpdateContainer;