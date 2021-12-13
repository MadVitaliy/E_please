

import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'

import About from "./components/About/About";
import Diagrams from "./components/Diagrams/Diagrams";
import Navbar from './components/Navbar/Navbar';
import Settings from "./components/Settinngs/Settings";
import Homepage from "./components/Homepage/Homepage";
import AddEditDeviceContainer from "./components/AddEditDevice/AddEditDeviceContainer";

const App = () => {
    return (
        <div className='app-wrapper'>
            <BrowserRouter basename={process.env.PUBLIC_URL}>

                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/homepage' component={Homepage} />
                    <Route path='/diagrams' component={Diagrams} />
                    <Route path='/settings' component={Settings} />
                    <Route path='/about' component={About} />

                    <Route path='/addeditdevice' component={AddEditDeviceContainer} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
