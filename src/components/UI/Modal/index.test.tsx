import React from "react";
import { render, getByText, fireEvent } from "@testing-library/react";

import Modal from "./index";

describe("Modal", () => {
  test("renders", () => {
    const mockClose = (): void => {
      return;
    };
    render(<Modal onClose={mockClose} />);
  });

  test("closes when the X is clicked", () => {
    const mockClose = jest.fn();
    render(<Modal onClose={mockClose} />);
    const modalPortal = document.getElementById("modalPortal");

    if (!modalPortal) {
      expect(modalPortal).toBeDefined();
      return;
    }

    const button = getByText(modalPortal, "✕");
    fireEvent.click(button);
    expect(mockClose.mock.calls.length).toEqual(1);
  });
});
