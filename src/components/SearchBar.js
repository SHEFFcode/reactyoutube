import React, { Component } from 'react';

//Class based component definition.
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }
  render() {
    return (
      <div>
        <input
          value={ this.state.term }
          type="text" onChange={ this.onInputChange.bind(this) }/>
      </div>
    );
  }
  onInputChange(e) {
    this.setState({ term: e.target.value })
  }
}
//export SearchBar as the default component
export default SearchBar;