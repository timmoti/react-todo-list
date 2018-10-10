import React, { Component } from 'react';
import TaskCreationBar from './TaskCreationBar';
import TodoItem from './TodoItem';
import SearchBar from './SearchBar';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoArray: this.props.todos,
      filteredTodos: this.props.todos
    };
  }

  addNewTask = input => {
    const newArray = [...this.state.todoArray];
    newArray.push({ name: input, isCompleted: false });
    this.setState({
      todoArray: newArray,
      filteredTodos: newArray
    });
  };

  filterTodos = input => {
    const newArray = [...this.state.todoArray];
    this.setState({
      filteredTodos: newArray.filter(task =>
        task.name.toLowerCase().includes(input)
      )
    });
  };

  //   toggleDoneNotDone = (task, event) => {
  //     const newArray = [...this.state.todoArray];
  //     newArray.task.isCompleted = !newArray.task.isCompleted;
  //     this.setState({
  //         todoArray: newArray
  //     });
  //   };

  toggleDoneNotDone = id => {
    const newArray = [...this.state.todoArray];
    newArray[id].isCompleted = !newArray[id].isCompleted;
    this.setState({
      todoArray: newArray
    });
  };

  render() {
    const { filteredTodos } = this.state;
    const todos = filteredTodos.map((task, index) => (
      <TodoItem
        key={index}
        index={index}
        {...task}
        toggleDoneNotDone={this.toggleDoneNotDone}
      />
    ));

    return (
      <div>
        <div className="taskCreationBar">
          <TaskCreationBar addNewTask={this.addNewTask} />
        </div>

        <div className="searchBar">
          <SearchBar filterTodos={this.filterTodos} />
        </div>
        <div>
          {filteredTodos.length > 0 && <div className="list">{todos}</div>}
          {filteredTodos.length === 0 && <h3>No matching todos</h3>}
        </div>
        {/* <div>
          {filteredTodos.length === 0 && <h3>No to dos match your search</h3>}
        </div> */}

        {/* {todoArray.map((task, index) => (
          <TodoItem
            key={index}
            index={index}
            {...task}
            toggleDoneNotDone={this.toggleDoneNotDone}
          />
        ))} */}
      </div>
    );
  }
}

export default List;
