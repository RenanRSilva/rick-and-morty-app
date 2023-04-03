import { RenderResult, render, screen } from "@testing-library/react";
import Home from "../pages/index";
let home: RenderResult;

describe("Home", () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });
  beforeEach(() => {
    home = render(<Home />);
  });
  it("renders location link", () => {
    const locationLink = screen.getByTestId("location-link");

    expect(locationLink).toBeInTheDocument();
  });

  it("renders episode link", () => {
    const episodeLink = screen.getByTestId("episode-link");

    expect(episodeLink).toBeInTheDocument();
  });

  it("renders character link", () => {
    const characterLink = screen.getByTestId("character-link");

    expect(characterLink).toBeInTheDocument();
  });
});
