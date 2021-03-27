import React, { Component } from "react";
// import { withAuth } from "../auth-context/auth-context";
import { Button } from "../button/button";

export class Profile extends Component {
  // unauthenticate = (event) => {
  //   event.preventDefault();
  //   this.props.logOut();
  //   this.props.navigate("main");
  // };

  render() {
    return (
      <p>
        <Button onClick={this.unauthenticate} value="Выйти" />
      </p>
    );
  }
}

// export const ProfileWithAuth = withAuth(Profile);
