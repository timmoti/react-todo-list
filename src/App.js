import React, { Component } from 'react';
import { todos } from './seedData';
import List from './List';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <div className="listContainer">
          <List todos={todos} />
        </div>
      </div>
    );
  }
}

export default App;
