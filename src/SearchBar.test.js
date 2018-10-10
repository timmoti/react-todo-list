import React from 'react';
import { cleanup, render, fireEvent } from 'react-testing-library';
import SearchBar from './SearchBar';

afterEach(cleanup);

test('should display search terms while typing in search bar', async () => {
  spyOn(console, 'error');
  const searchString = 'hello';
  const { getByPlaceholderText } = render(<SearchBar />);
  const inputNode = getByPlaceholderText('Search here');
  fireEvent.change(inputNode, { target: { value: searchString } });
  expect(inputNode.value).toBe('hello');
});

test('should invoke callback when typing into search bar', () => {
  const props = {
    filterTodos: jest.fn()
  };
  const searchString = 'a';
  const { getByPlaceholderText, debug } = render(<SearchBar {...props} />);
  const inputNode = getByPlaceholderText('Search here');
  fireEvent.change(inputNode, { target: { value: searchString } });
  expect(props.filterTodos).toHaveBeenCalledTimes(1);
});
