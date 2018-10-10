import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ name, isCompleted, index, toggleDoneNotDone }) => {
  const doneNotDone = isCompleted === true ? 'completed' : 'unCompleted';
  return (
    <div>
      <ul>
        <li
          onClick={event => toggleDoneNotDone(index, event)}
          className={doneNotDone}
        >
          {name}
        </li>
      </ul>
    </div>
  );
};

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  toggleDoneNotDone: PropTypes.func.isRequired
};

export default TodoItem;
