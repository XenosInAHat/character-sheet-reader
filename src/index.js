import React from 'react';
import ReactDOM from 'react-dom';
import FileInput from './components/FileInput.jsx';

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
