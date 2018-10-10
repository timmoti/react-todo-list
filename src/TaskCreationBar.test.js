import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import TaskCreationBar from './TaskCreationBar';

test('should display input in task creation bar', () => {
  const inputString = 'finish tests';
  const { getByPlaceholderText } = render(<TaskCreationBar />);
  const inputNode = getByPlaceholderText('Get things done');
  fireEvent.change(inputNode, { target: { value: inputString } });
  expect(inputNode.value).toBe('finish tests');
});

test.skip('should add a new task on pressing enter', () => {
  const handleSubmit = jest.fn();

  const { getByPlaceholderText, container } = render(<TaskCreationBar />);
});

test('should invoke callback function when adding a new task', () => {
  const props = {
    addNewTask: jest.fn()
  };
  const { getByPlaceholderText, container, debug } = render(
    <TaskCreationBar {...props} />
  );
  const formElement = container.querySelector('form');
  const inputNode = getByPlaceholderText('Get things done');
  fireEvent.change(inputNode, { target: { value: 'learn tests' } });
  fireEvent.submit(formElement, { key: 'Enter', keyCode: 13, which: 13 });
  debug();
  expect(props.addNewTask).toHaveBeenCalledTimes(1);
});
