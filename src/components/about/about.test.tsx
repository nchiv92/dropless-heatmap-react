import { render, screen } from "@testing-library/react";
import About from "./about";

test("it should have correct title", () => {
  render(<About />);
  const text = screen.queryByText("Nathan Chiverton");
  expect(text).toBeInTheDocument();
});

test.todo("Technology text should display on mouse enter");

test.todo("technology text should hide on mouse leave");
