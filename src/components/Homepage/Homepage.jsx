import React from 'react';
import i from './Homepage.module.css';
import DeviceTabListContainer from "../DeviceTabList/DeviceTabListContainer";
import Button from 'react-bootstrap/Button'
import {Plus} from 'react-bootstrap-icons'
import {NavLink} from "react-router-dom";

const Homepage = (props) => {
    return (
        <div className={i.page}>

            <DeviceTabListContainer/>

            <NavLink to='/addeditdevice'>
                <Button
                    type="button"
                    variant="primary"
                    className={i.button}
                >
                    <Plus/>
                </Button>
            </NavLink>
        </div>
    );
};
export default Homepage;