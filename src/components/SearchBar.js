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
      <div className="search-bar">
        <input
          value={ this.state.term }
          type="text"
          onChange={ event => this.onInputChange.call(this, event.target.value) }/>
      </div>
    );
  }
  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}
//export SearchBar as the default component
export default SearchBar;