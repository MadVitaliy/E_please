
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
            control_type: CONTROL_TYPE.VALUE
        },
        {
            id: 2,
            name: "Lamp",
            protocol: "some iot protocol",
            status: CONNECTED,
            control_type: CONTROL_TYPE.SWITCHER
        },
        {
            id: 3,
            name: "Backlight",
            protocol: "some iot protocol",
            status: !CONNECTED,
            control_type: CONTROL_TYPE.SLIDER
        }
    ];