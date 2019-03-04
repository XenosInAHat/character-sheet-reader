import React from 'react';
import PDFJS from 'pdfjs-dist';

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.file = React.createRef();
  }

  buildText(content) {
    console.log(content);
    return content.items.map(item => {return item.str}).join('');
  }

  // TODO: Get both text and annotations
  //   For text, extract item.str
  //   For annotations, extract, maybe?:item.{alternativeText, fieldName, fieldValue}
  getTextContent(pdf) {
    return pdf.getPage(1).then(page => {console.log(page); return page.getAnnotations();});
  }

  handleSubmit(e) {
    e.preventDefault();
    let f = this.file.current.files[0];
    let reader = new FileReader();
    reader.onload = () => {
      let arr = new Uint8Array(reader.result);
      PDFJS.getDocument(arr)
        .then(pdf => {
          return this.getTextContent(pdf);
        })
        .then(content => {
          let text = this.buildText(content);
          this.props.onFileChange(text);
        });
    }

    reader.readAsArrayBuffer(f);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Upload PDF:
          <input type='file' ref={this.file} />
        </label>
        <br />
        <button type='submit'>Submit</button>
      </form>
    );
  }
}

export default FileInput;

