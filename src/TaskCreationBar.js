import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TaskCreationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }

  handleInput = event => {
    this.setState({
      input: event.target.value
    });
  };

  handleSubmit = (input, event) => {
    event.preventDefault();
    this.props.addNewTask(input);
    this.setState({
      input: ''
    });
  };

  render() {
    return (
      <div>
        <form
          action=""
          onSubmit={event => this.handleSubmit(this.state.input, event)}
        >
          <input
            type="text"
            value={this.state.input}
            onChange={event => this.handleInput(event)}
            placeholder="Get things done"
          />
        </form>
      </div>
    );
  }
}

TaskCreationBar.propTypes = {
  addNewTask: PropTypes.func.isRequired
};

export default TaskCreationBar;
