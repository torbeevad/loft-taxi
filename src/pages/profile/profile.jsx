import React from "react";
import {connect} from 'react-redux'
import {Button} from "../../components/button/button";
import {HeaderWithConnect} from "../../components/header/header";
import {Label} from "../../components/label/label";
import {Input} from "../../components/input/input";
import "./profile.css"
import logoOnCard from "../../img/logo-on-card.svg"
import chip from "../../img/chip-pic.svg"
import {postCardDataAction} from "../../actions";

class Profile extends React.Component {

    postData = (event) => {
        event.preventDefault();
        const {cardNumber, expiryDate, cardName, cvc} = event.target;
        console.log(this.props)
        this.props.postData(cardNumber.value, expiryDate.value, cardName.value, cvc.value)
    }

    render() {
        return (
            <>
                <HeaderWithConnect/>
                <form className="profile-wrapper" onSubmit={this.postData}>
                    <div className="profile-container">
                        <h2 className="title">Профиль</h2>
                        <p>Введите платежные даные</p>
                        <div className="profile-content">
                            <div className="profile-content__side">
                                <div className="profile-form">
                                    <Label htmlFor="cardName" value="Имя владельца"/>
                                    <Input className="form-input" id="cardName" type="text"/>
                                    <Label htmlFor="cardNumber" value="Номер карты"/>
                                    <Input className="form-input" id="cardNumber" type="text"/>
                                    <span className="card-data-block">
                                        <span className="card-data-item">
                                            <Label forHtml="expiryDate" value="MM/YY"/>
                                            <Input className="form-input" id="expiryDate"/>
                                        </span>
                                        <span className="card-data-item">
                                            <Label forHtml="cvc" value="CVC"/>
                                            <Input className="form-input" id="cvc"/>
                                        </span>
                                    </span>
                                </div>
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
                        <Button className="profile-button" value="Отправить данные" type="submit"/>
                    </div>
                </form>
            </>
        );
    }
}

// export const ProfileWithConnect = connect(
//     null,
//     {postCardDataAction}
// )(Profile);

export const ProfileWithConnect = connect(
    (state) => ({profile: state.profile}), {postData: postCardDataAction})(Profile);