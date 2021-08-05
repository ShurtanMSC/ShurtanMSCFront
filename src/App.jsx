import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Admin from './pages/Admin'
import MainPage from './pages/MainPage'

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
           </Switch>
        </div>
    )
}

export default App
