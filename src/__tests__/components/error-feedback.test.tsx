import { RenderResult, render, screen } from "@testing-library/react";
import ErrorFeedback from "../../ui/components/error-feedback";
let errorFeedback: RenderResult;

describe("EpisodeCard", () => {
  beforeEach(() => {
    errorFeedback = render(<ErrorFeedback />);
  });

  it("show error message", () => {
    const errorMessage = screen.getByTestId("error-message");

    expect(errorMessage).toBeInTheDocument();
  });

  it("show error image", () => {
    const errorImage = screen.getByTestId("error-image");

    expect(errorImage).toBeInTheDocument();
  });
});
