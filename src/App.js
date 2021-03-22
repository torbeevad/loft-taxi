import React from "react";
import { Map } from "./components/map/map";
import { Profile } from "./components/profile/profile";
import { Main } from "./components/main/main";
import { Header } from "./components/header/header";
import { Login } from "./components/login/login";
import { Registration } from "./components/registration/registration";
import "./App.css";

const PAGES = ({ navigateTo }) => ({
  main: <Main navigate={navigateTo} />,
  header: <Header navigate={navigateTo} />,
  login: <Login navigate={navigateTo} />,
  registration: <Registration navigate={navigateTo} />,
  map: <Map navigate={navigateTo} />,
  profile: <Profile navigate={navigateTo} />,
});

class App extends React.Component {
  state = { currentPage: "map" };

  navigateTo = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <>
        <main>
          {this.state.currentPage !== "main" && (
            <Header navigate={this.navigateTo} />
          )}
          <section>{PAGES(this.navigateTo)[this.state.currentPage]}</section>
        </main>
      </>
    );
  }
}

export default App;
