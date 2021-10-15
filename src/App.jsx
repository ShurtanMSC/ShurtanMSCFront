import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Admin from './pages/Admin'
import MainPage from './pages/MainPage'
import Shurtan from './pages/Shurtan'
import {TOKEN} from "./utills/constant";
// import Test from "./requests/Test";

const App = () => {
        return (
            <div>
                <Switch>
                    <Route exact path="/">
                        <Admin />
                    </Route>
                    <Route exact path="/mainPage">
                        <MainPage/>
                    </Route>
                    <Route exact path="/shurtan">
                        <Shurtan/>
                    </Route>
                </Switch>
            </div>
            // <div>
            //     <Test/>
            // </div>
        )
    }

export default App
