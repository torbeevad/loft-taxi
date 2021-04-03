import React, {Component} from "react";
import {logIn, logOut} from "../../actions";
import {connect} from 'react-redux'
import {Button} from "../../components/button/button";
import {Header} from "../../components/header/header";
import {Label} from "../../components/label/label";
import {Input} from "../../components/input/input";
import "./profile.css"
import logoOnCard from "../../img/logo-on-card.svg"
import chip from "../../img/chip-pic.svg"

export class Profile extends Component {
    unauthenticated = (event) => {
        event.preventDefault();
        this.props.logOut();
    };

    render() {
        return (
            <>
                <Header/>
                <div className="profile-wrapper">
                    <div className="profile-container">
                        <h2 className="title">Профиль</h2>
                        <p>Введите платежные даные</p>
                        <div className="profile-content">
                            <div className="profile-content__side">
                                <form className="profile-form" type="submit">
                                    <Label htmlFor="name" value="Имя владельца"/>
                                    <Input className="form-input" id="name" type="text"/>
                                    <Label htmlFor="cardNumber" value="Номер карты"/>
                                    <Input className="form-input" id="cardNumber" mask={'+4\\9 99 999 99'}
                                           type="text"/>
                                    <div className="card-data-block">
                                        <div className="card-data-item">
                                            <Label forHtml="card-date" value="MM/YY"/>
                                            <Input className="form-input" id="card-date"/>
                                        </div>
                                        <div className="card-data-item">
                                            <Label forHtml="card-cvc" value="CVC"/>
                                            <Input className="form-input" id="card-cvc"/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="profile-content__side">
                                <div className="profile-card-vis">
                                    <div className="profile-card-vis__top-block">
                                        <img className="profile-card-logo" src={logoOnCard} alt="logo"/>
                                        <Input className="profile-card-vis__date"/>
                                    </div>
                                    <div className="profile-card-vis__middle-block">
                                        <Input className="profile-card-vis__card-num"/>
                                    </div>
                                    <div className="profile-card-vis__bottom-block">
                                        <img className="chip-pic" src={chip} alt="chip-pic"/>
                                        <img className="pay-sys-pic" src="" alt="pay-sys-pic"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Button className="profile-button" onClick={this.unauthenticated} value="Log Out!"/>
                    </div>
                </div>
            </>
        );
    }
}

export const ProfileWithConnect = connect(
    null,
    {logIn, logOut}
)(Profile);
