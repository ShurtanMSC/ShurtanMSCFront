import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Admin from './pages/Admin'
import MainPage from './pages/MainPage'
import Shurtan from './pages/Shurtan'
import {BASE_URL, TOKEN} from "./utills/constant";
import Report from "./pages/Report";
import axios from "axios";
import {configHeader} from "./utills/congifHeader";
// import Test from "./requests/Test";

const App = () => {

    function f() {
        axios.get(BASE_URL+"/api/auth/me",configHeader)
            .then(function (res) {
                console.log("RRRRRRR")
                console.log(res)
            })
            .catch(function (err) {
                localStorage.removeItem(TOKEN)
            })
    }
    f();
        return (
            <div>
                <Switch>
                    <Route exact path="/" render={() =>{
                        return localStorage.getItem(TOKEN) ? <MainPage/> : <Admin />
                    }}>

                    </Route>
                    <Route exact path="/mainPage" render={() =>{
                        return localStorage.getItem(TOKEN) ? <MainPage/> : <Redirect to="/"/>
                    }}>
                    </Route>
                    <Route exact path="/shurtan" render={() => {
                        return localStorage.getItem(TOKEN) ? <Shurtan/> : <Redirect to="/"/>
                    }}>
                    </Route>
                    <Route exact path="/reports" render={() => {
                        return localStorage.getItem(TOKEN) ? <Report/> : <Redirect to="/"/>
                    }}>
                    </Route>
                </Switch>
            </div>
            // <div>
            //     <Test/>
            // </div>
        )
    }

export default App
