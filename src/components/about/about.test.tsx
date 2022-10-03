import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import About from "./about";

test("it should have correct title", () => {
  render(<About />);
  const text = screen.queryByText("Nathan Chiverton");
  expect(text).toBeInTheDocument();
});

test("Duties text should display on mouse enter", async () => {
  render(<About />);
  fireEvent.mouseEnter(screen.getByTestId("experience-companies-text-0"));

  await waitFor(() => screen.getByTestId("experience-section"));
  expect(
    screen.getByTestId("experience-technologies-text-0")
  ).toBeInTheDocument();
});

test("Company & job info should display on mouse leave", async () => {
  render(<About />);
  fireEvent.mouseEnter(screen.getByTestId("experience-companies-text-0"));
  fireEvent.mouseLeave(screen.getByTestId("experience-technologies-text-0"));
  await waitFor(() => screen.getByTestId("experience-section"));
  expect(screen.getByTestId("experience-companies-text-0")).toBeInTheDocument();
});
