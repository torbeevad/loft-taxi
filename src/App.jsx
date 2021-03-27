import React from "react";
import { Map } from "./components/map/map";
import { Profile } from "./components/profile/profile";
import { Main } from "./components/main/main";
import { Header } from "./components/header/header";
import { Button } from "./components/button/button";
import { Login } from "./components/login/login";
// import { withAuth } from "./components/auth-context/auth-context";
import "./App.css";

const PAGES = {
  main: (props) => <Main {...props} />,
  header: (props) => <Header {...props} />,
  map: (props) => <Map {...props} />,
  profile: (props) => <Profile {...props} />,
  button: (props) => <Button {...props} />,
  login: (props) => <Login {...props} />,
};

class App extends React.Component {
  state = { currentPage: "map" };

  navigateTo = (page) => {
    // if (this.props.isLoggedIn) {
    this.setState({ currentPage: page });
    // } else {
    // this.setState({ currentPage: "main" });
    // }
  };

  render() {
    return (
      <main>
        {this.state.currentPage !== "main" && (
          <Header navigate={this.navigateTo} />
        )}
        <section>
          {PAGES[this.state.currentPage]({ navigate: this.navigateTo })}
        </section>
      </main>
    );
  }
}

export default App;
