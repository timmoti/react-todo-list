import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerms: ''
    };
  }

  handleInput = event => {
    this.setState(
      {
        searchTerms: event.target.value
      },
      () => this.props.filterTodos(this.state.searchTerms.toLowerCase())
    );
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.searchTerms}
          onChange={event => this.handleInput(event)}
          placeholder="Search here"
        />
      </div>
    );
  }
}

SearchBar.propTypes = {
  filterTodos: PropTypes.func.isRequired
};

export default SearchBar;
