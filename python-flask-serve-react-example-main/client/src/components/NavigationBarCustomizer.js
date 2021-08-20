import React from "react";

class NavigationBarCustomizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isSidebar: false, color: "white", className: "" };
  }

  changeClassName(value) {
    this.setState({ className: value });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.className}
          onInput={(e) => this.changeClassName(e.target.value)}
        />
        <div className="preview-nav-wrapper">
            
        </div>
      </div>
    );
  }
}
