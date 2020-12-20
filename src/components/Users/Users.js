import React, {Component} from 'react';
import User from "../User/User";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter,
    Link
} from "react-router-dom";
import UsersService from "../../services/users-service/UsersService";
import FullUser from "../full-user/FullUser";

class Users extends Component {

    state = {users : []};

    users_Service = new UsersService();

    async componentDidMount() {
        let users = await this.users_Service.users();
        this.setState({users});
    }

    render() {
        let {users} = this.state
        const {match: {url}} = this.props;
        console.log(this.props);
        return (

            <div className={"Users-header"}>
                <div className={"Users-text"}>
                    <p>Users</p>
                </div>
                <div className={"Users-body"}>
                {
                    users.map(value => <User item={value} key={value.id}/>)
                }

                </div>
                <div className={"Users-details"}>
                    <Switch>
                        <Route path={url + "/:id"} render={(props)=>{
                            const {match: {params: {id}}} = props;
                            console.log(props);
                            return <FullUser userId={id} key={id}/>
                        }}/>
                    </Switch>
                </div>

            </div>

        );
    }
}

export default withRouter(Users);