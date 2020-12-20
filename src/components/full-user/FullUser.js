import React, {Component} from 'react';
import UsersService from "../../services/users-service/UsersService";

class FullUser extends Component {

    state = {user: null};

    full_user_service = new UsersService();

    async componentDidMount() {
        let {userId} = this.props;
        let user = await this.full_user_service.user(userId);
        this.setState({user});
        console.log("Mount");
    }

    render() {
        let {user} = this.state;

        return (
            <div className={"FullUser"}>
                { user && <div>{user.id}{<br/>}{user.name}{<br/>}{user.email}{<br/>}
                {user.username}</div>}
            </div>
        );
    }
}

export default FullUser;