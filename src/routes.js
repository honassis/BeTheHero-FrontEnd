import React from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';
export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
        <Route path="/BeTheHero-FrontEnd/" exact component={Logon}/>
        <Route path="/BeTheHero-FrontEnd/register" component={Register}/>          
        <Route path="/BeTheHero-FrontEnd/profile" component={Profile}/>          
        <Route path="/BeTheHero-FrontEnd/incidents/new" component={NewIncident}/>          
        </Switch>
        </BrowserRouter>
    )
}