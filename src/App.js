import React from "react";
import { Home } from "./Home";
import { About } from "./About";
import { Profile } from "./Profile";
import "./App.css";

const PAGES = {
  home: <Home />,
  about: <About />,
  profile: <Profile />,
};

class App extends React.Component {
  state = { currentPage: "Home" };

  navigateTo = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <>
        <header>
          <nav>
            <ul>
              <li>
                <button
                  onClick={() => {
                    this.navigateTo("Home");
                  }}
                >
                  Home
                </button>
                <button
                  onClick={() => {
                    this.navigateTo("About");
                  }}
                >
                  About
                </button>
                <button
                  onClick={() => {
                    this.navigateTo("Profile");
                  }}
                >
                  Profile
                </button>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <section>{PAGES[this.state.currentPage]}</section>
        </main>
      </>
    );
  }
}

export default App;
