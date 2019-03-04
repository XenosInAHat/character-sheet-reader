import React from 'react';
import ReactDOM from 'react-dom';
import FileInput from './components/FileInput.jsx';

//TODO: Take values, fill out fields for each relevant item, and build out API script string
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      fileContents: ''
    }

    this.handleFileChange = this.handleFileChange.bind(this);
  }

  handleFileChange(contents) {
    console.log('setting contents');
    this.setState({fileContents: contents});
  }

  render() {
    return (
      <div>
        <FileInput onFileChange={this.handleFileChange} />
        <div>{this.state.fileContents}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

