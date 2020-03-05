import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import ContactForm from './components/ContactForm';

test("renders App without crashing", () => {
  render(<App />);
});

test('returns an error if input is wrong', () => {
  errors = '/error/i'
  expect(errors).toEqual(true)
});

test('ContactForm has a truthy return', () => {
  expect(ContactForm).toBe(true)
})

test('First name does not have a maxLength', () => {
  let fName = firstName.maxLength;
  expect(fName > 3);
})
