import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/home/home';
import Detail from './components/detalle/detalle';

const Routes = () => {
    return(

        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path="/movie/:id" component={Detail}/>
        </Switch>

    );
}

export default Routes;