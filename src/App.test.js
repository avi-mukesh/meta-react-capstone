import { getAllByTitle, render, screen } from "@testing-library/react";
import App from "./App";
import HomePage from "./Components/HomePage";
import Specials from "./Components/Specials";
import TableDetailsFormSection from "./Components/TableDetailsFormSection";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { initializeTimes } from "./App";

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
  const timesReturned = initializeTimes();
  expect(timesReturned).toEqual([
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
  ]);
});
