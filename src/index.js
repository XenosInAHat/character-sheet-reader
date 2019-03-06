//TODO: Figure out how to get rid of that pdf.js worker warning. Maybe do things in index?
//TODO: Take values and pass them into individual textboxes for potential editing/fixing
//TODO: Build out API script string(s)
//  - Put string in text area
//  - Add copy to clipboard button
//TODO: Actually do some styling
//TODO: Unit tests

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';

import FileInput from './components/FileInput.jsx';
import * as SheetConsts from './consts.js';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      contents: {}
    };

    this.handleFileChange = this.handleFileChange.bind(this);
  }
  
  handleFileChange(contents) {
    this.setState({contents: contents});
  }

  render() {
    return (
      <div>
        <FileInput onFileChange={this.handleFileChange} />
        <div className='container'>
          <div>Player Name: {this.state.contents[SheetConsts.PLAYER_NAME]}</div>
          <div>Character Name: {this.state.contents[SheetConsts.CHAR_NAME]}</div>
          <div>Class/Level: {this.state.contents['CLASS LEVEL']}</div>
          <div>Race: {this.state.contents.RACE}</div>
          <div>Background: {this.state.contents.BACKGROUND}</div>
          <div>Experience Points: {this.state.contents['EXPERIENCE POINTS']}</div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

