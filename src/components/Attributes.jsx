import React from 'react';

//TODO: Validate input values
class Attribute extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange(e, attr, isMod) {
    e.preventDefault();
    if (isMod)
      this.props.updateMod(e.target.value, attr);
    else
      this.props.updateAttr(e.target.value, attr);
  }

  render() {
    return (
      <div className='form-group form-inline'>
        <label className='attr-label'>{this.props.attr}</label>
        <input 
          type='text'
          className='form-control attr-input' 
          value={this.props.value} 
          onChange={e => this.handleChange(e, this.props.attr, false)}
        />
        <input 
          type='text'
          className='form-control attr-input' 
          value={this.props.mod} 
          onChange={e => this.handleChange(e, this.props.attr, true)}
        />
      </div>
    );
  }
}

class Attributes extends React.Component {
  constructor(props) {
    super(props);
    this.updateAttr = this.updateAttr.bind(this);
    this.updateMod = this.updateMod.bind(this);
  }

  updateAttr(value, attr) {
    this.props.updateAttribute(attr.toUpperCase(), value); // provide attr string
  }

  updateMod(value, attr) {
    let str = attr + '_mod';
    this.props.updateAttribute(str.toUpperCase(), value); // provide mod string
  }

  render() {
    if (this.props.attrs) {
      let attrs = ['str', 'dex', 'con', 'int', 'wis', 'cha'].map(attr => {
        return (
          <Attribute 
            key={attr} 
            attr={attr.toUpperCase()}
            value={this.props.attrs[attr]} 
            mod={this.props.attrs[attr + 'Mod']}
            updateAttr={this.updateAttr}
            updateMode={this.updateMod}
          />
        );
      });

      return (
        <ul className='attributes'>
          {attrs}
        </ul>
      );
    }

    return (
      <ul>
        Load a PDF to get started.
      </ul>
    );
  }
}

export default Attributes;

