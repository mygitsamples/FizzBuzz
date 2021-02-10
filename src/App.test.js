import { render, screen } from '@testing-library/react';
import App from './App';
import InputForm from "../src/components/inputform/inputform";

test('validate Header', () => {
  render(<App />);
  const headerElement = screen.getByText("FizzBuzz");
  expect(headerElement).toBeInTheDocument();
});

test('validate button disabled by default',()=>{
  render(<InputForm/>);
  const submitButton= screen.getByText("Submit");
  const clearButton= screen.getByText("Clear");
  expect(submitButton).toBeDisabled()
  expect(clearButton).toBeDisabled()
})

