import React, {Component} from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter,
    Link
} from "react-router-dom";

class User extends Component {



    render() {

        let {item, match: {url}} = this.props
        return (
            <Router>
                <div>
                    <div className={"User"}>
                        {item.id}. {item.name}
                        {
                            <Link to={url + "/" + item.id}>Details</Link>
                        }

                    </div>
                    {<hr/>}
                </div>
            </Router>
        );
    }
}

export default withRouter(User);