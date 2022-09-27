import { render, screen } from "@testing-library/react";
import About from "./about";

test("it should have correct title", () => {
  render(<About />);
  const text = screen.queryByText("Nathan Chiverton");
  expect(text).toBeInTheDocument();
});
