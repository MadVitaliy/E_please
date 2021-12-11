import Heater from './images/Heater.jpg';
import Lamp from './images/Lamp.jpg';
import Backlight from './images/Backlight.jpg';

const CONTROL_TYPE = {
    SWITCHER: 0,
    SLIDER: 1,
    VALUE: 2
};
const CONNECTED = true;
export let deviceList =
    [
        {
            id: 1,
            name: "Heater",
            protocol: "some iot protocol",
            status: CONNECTED,
            control_type: CONTROL_TYPE.VALUE,
            img: Heater,
        },
        {
            id: 2,
            name: "Lamp",
            protocol: "some iot protocol",
            status: CONNECTED,
            control_type: CONTROL_TYPE.SWITCHER,
            img: Lamp,
        },
        {
            id: 3,
            name: "Backlight",
            protocol: "some iot protocol",
            status: !CONNECTED,
            control_type: CONTROL_TYPE.SLIDER,
            img: Backlight,
        }
    ];