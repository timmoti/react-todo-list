import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import TodoItem from './TodoItem';

test('should render a task in li', () => {
  const props = {
    name: 'task1',
    isCompleted: false,
    toggleDoneNotDone: jest.fn()
  };

  const { container } = render(<TodoItem {...props} />);

  const listItem = container.querySelector('li');

  expect(listItem).toHaveTextContent(props.name);
  // expect(within(listItem).queryByText(props.name)).toBeInTheDocument();
});

test('should toggle task status when text is clicked', () => {
  const props = {
    name: 'task1',
    isCompleted: false,
    toggleDoneNotDone: jest.fn()
  };

  const { container } = render(<TodoItem {...props} />);

  const listItem = container.querySelector('li');

  fireEvent.click(listItem);
  expect(props.toggleDoneNotDone).toHaveBeenCalledTimes(1);
});

test('should render an uncompleted task', () => {
  const props = {
    name: 'task1',
    isCompleted: false,
    toggleDoneNotDone: jest.fn()
  };

  const { container } = render(<TodoItem {...props} />);

  const listItem = container.querySelector('li');

  // expect(listItem).toHaveClass('completed');

  expect(listItem).toHaveClass('unCompleted');
});

test('should render a completed task', () => {
  const props = {
    name: 'task1',
    isCompleted: true,
    toggleDoneNotDone: jest.fn()
  };

  const { container } = render(<TodoItem {...props} />);
  const listItem = container.querySelector('li');

  expect(listItem).toHaveClass('completed');
});
