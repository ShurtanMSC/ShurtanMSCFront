import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Admin from './pages/Admin'
import MainPage from './pages/MainPage'
import Shurtan from './pages/Shurtan'
//
const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Admin/>
                </Route>
               <Route exact path="/mainPage">
                    <MainPage/>
               </Route>
               <Route exact path="/shurtan">
                   <Shurtan/>
               </Route>
           </Switch>
        </div>
    )
}

export default App
