import React from 'react';
import { render, cleanup, fireEvent, within } from 'react-testing-library';
import List from './List.js';

afterEach(cleanup);

test.skip('render tasks in a list ', () => {
  spyOn(console, 'error');
  const props = {
    initialList: [
      { name: 'task1', isCompleted: true },
      { name: 'task2', isCompleted: false }
    ]
  };

  const { container } = render(<List {...props} />);
  const listNode = container.querySelector('ul');
  props.initialList.forEach(task => {
    expect(within(listNode))
      .queryByText(task.name)
      .toBeInTheDocument();
  });
});

test('Search Bar should be rendered', () => {});

test('should display all todos when search bar is empty', () => {});

test('should display filtered todos when search bar has matching string', () => {});

test('should display No matching todos when search bar does not have matching string', () => {});
