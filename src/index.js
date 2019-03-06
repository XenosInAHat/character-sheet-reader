import React from 'react';
import ReactDOM from 'react-dom';
import FileInput from './components/FileInput.jsx';
import * as SheetConsts from './consts.js';

//TODO: Fill out fields for each relevant item, and build out API script string
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
        <div>Player Name: {this.state.contents[SheetConsts.PLAYER_NAME]}</div>
        <div>Character Name: {this.state.contents[SheetConsts.CHAR_NAME]}</div>
        <div>Class/Level: {this.state.contents['CLASS LEVEL']}</div>
        <div>Race: {this.state.contents.RACE}</div>
        <div>Background: {this.state.contents.BACKGROUND}</div>
        <div>Experience Points: {this.state.contents['EXPERIENCE POINTS']}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

