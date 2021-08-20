import React from "react";

import "../styles/ColorPicker.css";

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.callback = props.callback;
    this.state = { color: props.color, colorNumber: props.colorNumber};
    this.colorNumber = props.colorNumber;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ color: nextProps.color });  
  }

  changeColor(color) {
    this.callback(color, this.colorNumber);
    this.setState({color: color});
  }
  render() {
      let color = this.state.color;
    return (
      <div className="color-picker">
        <div
          className="color-box"
          style={{background: color}}
        ></div>
        <input
          type="color"
          onInput={(e) => {
            this.changeColor(e.target.value);
          }}
          value={color}
        />
        <div>{color}</div>
      </div>
    );
  }
}
export default ColorPicker;
