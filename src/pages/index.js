import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Login from "./accounts/Login"
import AccountRoutes from "./accounts";
import RandomMeal from "./RandomMeal";


function Root() {
    return (
        <div>
            <Route exact path="/" component={Login}/>
            <Route exact path="/home" component={Home}/>
            <Route path="/accounts" component={AccountRoutes}/>
            <Route exact path="/randommeal" component={RandomMeal}/>
        </div>
    )
}

export default Root;