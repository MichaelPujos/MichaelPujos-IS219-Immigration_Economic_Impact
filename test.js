import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

test("renders navigation links", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
  expect(screen.getByText(/About/i)).toBeInTheDocument();
  expect(screen.getByText(/Reports/i)).toBeInTheDocument();
});

test("renders Google Maps section", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(screen.getByText(/Immigration Workforce, Jobs & Deportation Impact/i)).toBeInTheDocument();
});

test("renders Data Visualization section", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(screen.getByText(/Data Visualization/i)).toBeInTheDocument();
});

test("renders Immigration Data Table", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(screen.getByText(/Immigration Data Table/i)).toBeInTheDocument();
});
