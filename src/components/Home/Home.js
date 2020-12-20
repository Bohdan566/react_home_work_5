import React, {Component} from 'react';
import logo from "../../logo.svg";
import {Link} from "react-router-dom";



class Home extends Component {
    render() {
        return (

            <div className="App-header">
                <div>
                    <p>React</p>
                </div>

                <div>
                    <img src={logo} className="App-logo" alt="logo" />
                </div>

                <div></div>
            </div>

        );
    }
}

export default Home;