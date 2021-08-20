import React from "react";

import "../styles/Main.css";

import StyledButton from '../components/StyledButton';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="top-main">
          <div className="top-main-1">
                <h1>Title Here</h1>
          </div>
        </div>
        <div className="bottom-main-wrapper">
          <div className="bottom-main">
            <StyledButton title="Get Started" size="large" href="create-theme"/>
            <StyledButton title="Explore" size="large" href="theme-explorer"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
