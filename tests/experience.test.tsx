import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Experience from "../pages/experience";

describe("Experience Page", () => {
  it("should have correct title", () => {
    render(<Experience />);
    const text = screen.queryByText("Nathan Chiverton");
    expect(text).toBeInTheDocument();
  });

  it("should display duties text on mouse enter", async () => {
    render(<Experience />);
    fireEvent.mouseEnter(screen.getByTestId("experience-companies-text-0"));

    await waitFor(() => screen.getByTestId("experience-section"));
    expect(
      screen.getByTestId("experience-technologies-text-0")
    ).toBeInTheDocument();
  });

  it("should display company & job info on mouse leave", async () => {
    render(<Experience />);
    fireEvent.mouseEnter(screen.getByTestId("experience-companies-text-0"));
    fireEvent.mouseLeave(screen.getByTestId("experience-technologies-text-0"));
    await waitFor(() => screen.getByTestId("experience-section"));
    expect(
      screen.getByTestId("experience-companies-text-0")
    ).toBeInTheDocument();
  });
});
