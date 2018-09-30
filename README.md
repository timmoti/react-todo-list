# Lab: React Todo List

It's time to practice what you've learnt about React! 

### Instructions

Getting started
  - Fork the repo
  - Clone the repo
  - `cd` into the directory and run `npm install`
  - Start application: `npm start` and go to `localhost:3000` in your browser

Tasks
  - Create a new branch to work on (this allows you to try the lab again later with different solutions)
    - Run `git checkout -b solution_1`
    - You should make a local commit after you add each component as the instructions given below
    - You should put your `solution_1` branch to the GitHub in the end
  - Create the following components:
    - App.js
      - It should make use of TodoList component
      - The todos defined in seedData.js should be passed to TodoList component as props
    - TodoList
      - The component should matain all todo items in its local state
    - TodoItem
      - Allow user to mark a Todo as done by clicking on it
      - Add strikethrough style to a Todo when user marks it as done
    - TodoCreationBar
      - Allow user to add a todo by inputting a string and hitting a 'Add todo' button
    - TodoFilterBar
      - Allows the user to filter todos by inputting a search string and hitting a 'Filter' button. Todos that do not match the search string should be hidden from display
      - Allows the user to see all Todos again when he hits a 'See all todos' button

The following extension tasks should be done when the corresponding topics are covered in the class.

Extension Task 1:
  - Add PropTypes check to all the components created in the previous task

Extension Task 2:
  - Add unit tests to all the components created in the previous task
  - Steps:
    - Install NPM package for `jest-dom` and `react-testing-library`
    - Create `src/setupTests.js` file as mentioned in `react-testing-library` [documentation](https://github.com/kentcdodds/react-testing-library#global-config)
    - Write unit tests for each component

Extension Task 3:
  - Create a new branch to work on `git checkout -b solution_with_tdd`
  - Redo the lab from scratch, and create each component following Test Driven Development approach

