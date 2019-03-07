import React from 'react';
import PDFJS from 'pdfjs-dist';

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.file = React.createRef();
  }

  cleanString(str) {
    return str.replace(/\s+/g, ' ').trim();
  }

  parseContents(content) {
    let obj = {};
    content.forEach(item => {
      obj[this.cleanString(item.fieldName)] = item.fieldValue;
    });

    return obj;
  }

  // TODO: Handle equipment and spells
  getTextContent(pdf) {
    return pdf.getPage(1).then(page => page.getAnnotations());
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
          let contents = this.parseContents(content);
          this.props.onFileChange(contents);
        });
    }

    reader.readAsArrayBuffer(f);
  }

  render() {
    return (
      <form className='file-input' onSubmit={this.handleSubmit}>
        <input type='file' ref={this.file} />
        <button type='submit' className='btn btn-primary'>Read Sheet</button>
      </form>
    );
  }
}

export default FileInput;

