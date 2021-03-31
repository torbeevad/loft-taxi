import React from "react";
import { Map } from "./pages/map/map";
import { Profile } from "./pages/profile/profile";
import { Main } from "./pages/main/main";
import { Header } from "./components/header/header";
import { Login } from "./pages/login/login";
// import { withAuth } from "./components/auth-context/auth-context";
import "./App.css";
import { Registration } from "./pages/registration/registration";

const PAGES = {
  main: (props) => <Main {...props} />,
  header: (props) => <Header {...props} />,
  map: (props) => <Map {...props} />,
  profile: (props) => <Profile {...props} />,

  login: (props) => (
    <Main {...props}>
      <Login {...props} />
    </Main>
  ),
  registration: (props) => (
    <Main {...props}>
      <Registration {...props} />
    </Main>
  ),
};

class App extends React.Component {
  state = { currentPage: "login" };
  navigateTo = (page) => {
    // if (this.props.isLoggedIn) {
    this.setState({ currentPage: page });
    // } else {
    //   this.setState({ currentPage: "login" });
    // }
  };
  render() {
    return (
      <main>
        <section>
          {this.state.currentPage !== "login" &&
            this.state.currentPage !== "registration" && (
              <Header navigate={this.navigateTo} />
            )}
          {PAGES[this.state.currentPage]({ navigate: this.navigateTo })}
        </section>
      </main>
    );
  }
}
export default App;
