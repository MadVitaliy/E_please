import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';

import About from "./components/About/About";
import Diagrams from "./components/Diagrams/Diagrams";
import Homepage from './components/Homepage/Homepage';
import Navbar from './components/Navbar/Navbar';
import Settings from "./components/Settinngs/Settings";

const App = () => {
    return (
        <div className='app-wrapper'>
            <BrowserRouter>
                {/*<Header />*/}
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/homepage' component={Homepage} />
                    <Route path='/diagrams' component={Diagrams} />
                    <Route path='/settings' component={Settings} />
                    <Route path='/about' component={About} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
