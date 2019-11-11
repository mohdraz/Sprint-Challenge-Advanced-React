import React from 'react';
import {render} from "@testing-library/react";
import App from './App';

test('if the app is working without crash', () => {
  // const { getByText } = render(<App />);
  // getByText(/player/i);
  render(<App />);
});

test('if the app component is working', () => {
  const container = render(<App />);
  console.log("Container Component: " ,container);
});