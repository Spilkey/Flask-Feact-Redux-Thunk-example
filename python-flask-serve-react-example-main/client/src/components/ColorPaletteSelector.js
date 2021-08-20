import React from "react";

import RangeSlider from "./RangeSlider";
import ColorPicker from "./ColorPicker";

import StyledButton from "./StyledButton";

import store from "../redux/store"

import { fetchColourPalette } from "../redux/actions/colour/colour";

import { connect, useDispatch, useSelector } from 'react-redux'


class ColorPaletteSelector extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onHandleGetPalette()
  }

  handleSliderValue() { }

  handleColorChange(color, index) {

  }

  componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  rgbToHex(r, g, b) {
    return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
  }

  render() {
    const state = this.props.colorData;
    const colorData = state.colourReducer.color

    const coloursLoaded = !colorData.loading && colorData.data;
    let colorDivs;

    if (coloursLoaded) {
      let colors = colorData.data;

      colors = colors.map((elm, i) => {
        return this.rgbToHex(elm[0], elm[1], elm[2])
      });

      colorDivs = (
        <div className="colors-row">
          <ColorPicker
            colorNumber={0}
            color={colors[0]}
            callback={this.handleColorChange}
          />
          <ColorPicker
            colorNumber={1}
            color={colors[1]}
            callback={this.handleColorChange}
          />
          <ColorPicker
            colorNumber={2}
            color={colors[2]}
            callback={this.handleColorChange}
          />
          <ColorPicker
            colorNumber={3}
            color={colors[3]}
            callback={this.handleColorChange}
          />
          <ColorPicker
            colorNumber={4}
            color={colors[4]}
            callback={this.handleColorChange}
          />
        </div>
      )
    } else {
      colorDivs = <div className="colors-row">Loading Colors ...</div>;
    }

    return (
      <div>
        {colorDivs}
        <div
          onClick={(e) => {
            this.props.onHandleGetPalette();
          }}
        >
          <StyledButton title="Generate" />
        </div>
      </div>
    );
  };
}

export function ColorPaletteSelectorFunc(props){

  const colors = useSelector((state) => (state));
  const state = colors.colourReducer.color;

  const dispatch = useDispatch();

  let componentToHex = function(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  };

  let rgbToHex = function(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  };

  const coloursLoaded = !state.loading && state.data;
  let colorDivs;

  if (coloursLoaded) {
    console.log('Loaded COlors')
    let colors = state.data;

    colors = colors.map((elm, i) => {
      return rgbToHex(elm[0], elm[1], elm[2])
    });

    colorDivs = (
      <div className="colors-row">
        <ColorPicker
          colorNumber={0}
          color={colors[0]}
          callback={() =>{}}
        />
        <ColorPicker
          colorNumber={1}
          color={colors[1]}
          callback={() =>{}}
        />
        <ColorPicker
          colorNumber={2}
          color={colors[2]}
          callback={() =>{}}
        />
        <ColorPicker
          colorNumber={3}
          color={colors[3]}
          callback={() =>{}}
        />
        <ColorPicker
          colorNumber={4}
          color={colors[4]}
          callback={() =>{}}
        />
      </div>
    )
  } else {
    colorDivs = <div className="colors-row">Loading Colors ...</div>;
  }

  return (
    <div>
      {colorDivs}
      <div
        onClick={(e) => {
          dispatch(fetchColourPalette);
        }}
      >
        <StyledButton title="Generate" />
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onHandleGetPalette: () => dispatch(fetchColourPalette),
  };
};

const mapStateToProps = (state, props) => ({
  colorData: state
});

export default connect(mapStateToProps, mapDispatchToProps)(ColorPaletteSelector);

