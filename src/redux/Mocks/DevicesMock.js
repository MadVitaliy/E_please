import Heater from '../images/Heater.jpg';
import Lamp from '../images/Lamp.jpg';
import Backlight from '../images/Backlight.jpg';

export const CONTROL_TYPE = {
    SWITCHER: 0,
    SLIDER: 1,
    VALUE: 2
};
export const CONNECTED = true;
export let deviceList =
    [
        {
            id: 0,
            name: "Heater",
            protocol: "some iot protocol 1",
            status: CONNECTED,
            control_type: CONTROL_TYPE.VALUE,
            img: Heater,
        },
        {
            id: 1,
            name: "Lamp",
            protocol: "some iot protocol 2",
            status: CONNECTED,
            control_type: CONTROL_TYPE.SWITCHER,
            img: Lamp,
        },
        {
            id: 2,
            name: "Backlight",
            protocol: "some iot protocol 3",
            status: !CONNECTED,
            control_type: CONTROL_TYPE.SLIDER,
            img: Backlight,
        }
    ];