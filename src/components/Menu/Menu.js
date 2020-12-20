import React, {Component} from 'react';
import logo from "../../logo.svg";
import Home from "../Home/Home";
import Users from "../Users/Users";


import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter,
    Link
} from "react-router-dom";

class Menu extends Component {
    render() {
        return (
            <Router>

                <div className={"Menu"}>
                    <div className={"Menu-logo"}><img src={logo} className="App-logo-2" alt="logo" /></div>
                    <div className={"Menu-home"}>
                        <Link to={"/home"}>Home</Link>
                    </div>
                    <div className={"Menu-users"}>
                        <Link to={"/users"}>Users</Link>
                    </div>

                </div>
                <div className={"Menu-body"}>
                    <Switch>
                        <Route path={"/home"} render={()=>{
                            return <Home/>
                        }}/>
                        <Route path={"/users"} render={()=>{
                            return <Users/>
                        }}/>
                    </Switch>
                </div>

            </Router>
        );
    }
}

export default (Menu);