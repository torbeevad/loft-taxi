import React, {Component} from "react";
import {logIn, logOut} from "../../actions";
import {connect} from 'react-redux'
import {Button} from "../../components/button/button";
import {Header} from "../../components/header/header";

export class Profile extends Component {
    unauthenticated = (event) => {
        event.preventDefault();
        this.props.logOut();
    };

    render() {
        return (
            <>
                <Header/>
                <div>
                    <p>Профиль</p>
                    <Button onClick={this.unauthenticated} value="Log Out!"/>
                </div>
            </>
        );
    }
}

export const ProfileWithConnect = connect(
    null,
    {logIn, logOut}
)(Profile);
