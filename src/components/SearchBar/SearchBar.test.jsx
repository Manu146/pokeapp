import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from ".";

describe("<SearchBar/>", () => {
  it("Button is disabled when input is clear, enabled when text is present", async () => {
    const handleSearchMock = jest.fn();
    const setSearchMock = jest.fn();
    render(
      <SearchBar handleSearch={handleSearchMock} setSearch={setSearchMock} />
    );
    const buttonEl = screen.getByRole("button");
    const inputEl = screen.getByRole("searchbox");
    expect(buttonEl).toBeDisabled();

    userEvent.clear(inputEl);
    userEvent.type(inputEl, "8");

    await waitFor(() => expect(buttonEl).toBeEnabled());
  });

  it("Correct handlers are called on text change and on submit", async () => {
    const handleSearchMock = jest.fn();
    render(<SearchBar handleSearch={handleSearchMock} />);
    const buttonEl = screen.getByRole("button");
    const inputEl = screen.getByRole("searchbox");

    userEvent.clear(inputEl);
    userEvent.type(inputEl, "15");

    await userEvent.click(buttonEl);
    expect(handleSearchMock).toHaveBeenCalled();
  });
});
