import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Admin from './pages/Admin'
import MainPage from './pages/MainPage'
import Shurtan from './pages/Shurtan'
import {TOKEN} from "./utills/constant";
import Report from "./pages/Report";
// import Test from "./requests/Test";

const App = () => {

        return (
            <div>
                <Switch>
                    <Route exact path="/">
                        <Admin />
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
