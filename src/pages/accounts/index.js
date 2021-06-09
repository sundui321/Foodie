import React from "react";
import { Route, Switch } from "react-router-dom";
import Profile from "./Profile";
import Login from "./Login";
import Register from "./Register";
import loggedHome from "./loggedHome";
import {AnimatePresence} from "framer-motion";

function Routes() {
    return (
        <AnimatePresence>
            <Switch>
                <Route exact path="/accounts/profile" component={Profile} />
                <Route exact path="/" component={Login} />
                <Route exact path="/accounts/register" component={Register}/>
                <Route exact path="/accounts/loggedhome" component={loggedHome}/>
                
            </Switch>
        </AnimatePresence>
    );
}

export default Routes;