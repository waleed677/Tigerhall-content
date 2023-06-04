import { render, screen, fireEvent } from "@testing-library/react";
import Search from "./components/Search";

describe("Search component", () => {
  test("should call onSearch when typing in the input field", () => {
    const mockOnSearch = jest.fn();
    render(<Search onSearch={mockOnSearch} />);
    const input = screen.getByPlaceholderText("Enter search term");

    fireEvent.change(input, { target: { value: "podcast" } });

    expect(mockOnSearch).toHaveBeenCalledTimes(1);
    expect(mockOnSearch).toHaveBeenCalledWith("podcast");
  });
});
