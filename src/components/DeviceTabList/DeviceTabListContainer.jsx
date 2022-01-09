import React from 'react';
import {connect} from "react-redux";
import {addDeviceAC, updateDeviceAC, deleteDeviceAC, setDevicesAC, getDevicesAC} from "../../redux/DeviceReducer"
import {deviceList} from "../../redux/Mocks/DevicesMock";

import DeviceTabList from "./DeviceTabList";


// const DeviceTabListContainer = (props) => {
//     props.setDevices(deviceList);
//     console.log("DeviceTabListContainer.Render()");
//     console.log(props.devices);
//
//     return (
//         <DeviceTabList devices={props.devices}
//                        deleteDevice={props.deleteDevice}/>
//     );
// }

class DeviceTabListContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {devices : this.props.devices};
    }

    componentDidMount() {
       // this.props.setDevices(deviceList);
    }

    render() {
        console.log("DeviceTabListContainer.Render()");
        console.log(this.props.devices);
        return (
            <DeviceTabList devices={this.props.devices}
                           deleteDevice={this.props.deleteDevice}/>
        );
    }

}

let mapStateToProps = (state) => {
    return {
        devices: state.devicesPage.devices
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        deleteDevice: (deviceId) => {
            dispatch(deleteDeviceAC(deviceId));
        },
        setDevices: (devices) => {
            dispatch(setDevicesAC(devices));
        },
        getDevices: () => {
            dispatch(getDevicesAC());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DeviceTabListContainer);