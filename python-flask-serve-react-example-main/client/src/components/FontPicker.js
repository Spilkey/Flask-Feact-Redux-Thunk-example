import React from 'react';

import FontPicker from "font-picker-react";

import '../styles/FontPicker.css'

import env from 'react-dotenv';

class FontSelector extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            activeFontFamily: "Open Sans",
        };
    }

    render(){
        return (
            <div>
                <FontPicker
                apiKey={env.REACT_APP_FONTS_API_KEY}
                activeFontFamily={this.state.activeFontFamily}
                onChange={(nextFont) =>
                    this.setState({
                        activeFontFamily: nextFont.family,
                    })
                }/>
                <h2 className="apply-font">Sample Text</h2>
            </div>
        )
    }
}

export default FontSelector;