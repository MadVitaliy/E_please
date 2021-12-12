import React from 'react';

import {useSelector} from "react-redux";
import AddEditDevice from "./AddEditDevice";

// <div className={i.page}>
//     <FormText>TODO: add something to choose device icon</FormText>
//
//     <div>
//         <FormLabel>Device name:</FormLabel>
//         <FormControl placeholder="Enter device name"/>
//         <FormLabel className="text-muted">'Speakers' for example</FormLabel>
//     </div>
//
//     <div>
//         <FormLabel>Protocol:</FormLabel>
//         <FormSelect>
//             <option value="1">Protocol #1</option>
//             <option value="2">Protocol #2</option>
//             <option value="3">Protocol #2</option>
//         </FormSelect>
//         <FormText className="text-muted">TODO: get the list of available protocols thought props and create options with map</FormText>
//     </div>
//
//     <div>
//         <FormLabel>Control type:</FormLabel>
//         <FormSelect>
//             <option value="1">Toggle</option>
//             <option value="2">Slider</option>
//             <option value="3">Value</option>
//         </FormSelect>
//         <FormText className="text-muted">TODO: get the list of available protocols thought props and create options with map</FormText>
//     </div>
//
//     <Button variant="primary" type="submit">
//         Add/Save
//     </Button>
//     <div>
//         <FormText className="text-muted">TODO: add logic to button</FormText>
//     </div>
// </div>


const AddEditDeviceContainer = () => {
    let device_default_name = "Enter device name";
    let protocols = ["Protocol #1", "Protocol #2","Protocol #3"];

    return (
        <AddEditDevice name = {device_default_name} protocols = {protocols}/>
    );
};

export default AddEditDeviceContainer;