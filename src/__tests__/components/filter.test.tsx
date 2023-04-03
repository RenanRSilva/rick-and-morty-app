import {
  RenderResult,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import Filter from "../../ui/components/filter";
let filter: RenderResult;

jest.mock("next/router", () => require("next-router-mock"));

describe("Filter", () => {
  beforeEach(() => {
    const setRequestQuery = jest.fn();
    filter = render(<Filter setRequestQuery={setRequestQuery} />);
  });

  it("open filter when click button", () => {
    const openFilterButton = screen.getByTestId("open-filter-button");

    fireEvent.click(openFilterButton);

    const filterTitle = screen.queryByTestId("filter-title");

    expect(filterTitle).toBeInTheDocument();
  });
});
