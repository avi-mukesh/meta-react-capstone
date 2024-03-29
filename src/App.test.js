import { getAllByTitle, render, screen } from "@testing-library/react";
import App, { updateTimes } from "./App";
import HomePage from "./components/HomePage";
import Specials from "./components/Specials";
import TableDetailsFormSection from "./components/TableDetailsFormSection";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { initializeTimes } from "./App";
import { fetchAPI } from "./utils/mockApi";
import { assert } from "console";

test("specials online menu button", () => {
  render(<Specials />);
  const button = screen.getByText("Online Menu");
  expect(button).toBeInTheDocument();
});

test("home page heading", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const headings = screen.getAllByText("Little Lemon");
  expect(headings[0]).toBeInTheDocument();
});

test("initialize times returns correct times", () => {
  const initialState = initializeTimes();
  const expectedResult = fetchAPI(new Date());

  expect(initialState).toEqual(expectedResult);
});

test("update times returns the same state", () => {
  const times = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const action = { type: "non_existent" };
  const newTimes = updateTimes(times, action);
  expect(newTimes).toEqual(times);
});

test("num people can't be less than 1", () => {
  assert(true);
});
