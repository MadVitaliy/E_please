import React from 'react';
import i from './Homepage.module.css';
import DeviceTab from "./DeviceTab/DeviceTab";
import {useSelector} from "react-redux";

// console.log(i);
// const CONTROL_TYPE = {
//     SWITCHER: 0,
//     SLIDER: 1,
//     VALUE: 2
// };
// const CONNECTED = true;
// let devices =
//     [
//         {
//             id: 1,
//             name: "Heater",
//             protocol: "some iot protocol",
//             status: CONNECTED,
//             control_type: CONTROL_TYPE.VALUE
//         },
//         {
//             id: 2,
//             name: "Lamp",
//             protocol: "some iot protocol",
//             status: CONNECTED,
//             control_type: CONTROL_TYPE.SWITCHER
//         },
//         {
//             id: 3,
//             name: "Backlight",
//             protocol: "some iot protocol",
//             status: !CONNECTED,
//             control_type: CONTROL_TYPE.SLIDER
//         }
//     ];

const Homepage = () => {
    let devices = useSelector(state => state.devices);
    const device_tabs = devices.map((device) =>
        <DeviceTab device={device}/>
    );
    return (
        <div className={i.page}>
            {device_tabs}
        </div>
    );
};
export default Homepage;