import { RenderResult, render, screen } from "@testing-library/react";
import LocationCard from "../../ui/components/location-card";
import { mockLocation } from "../../data/mocks/mock-location";
let locationCard: RenderResult;

describe("LocationCard", () => {
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
    const locationMock = mockLocation();

    locationCard = render(<LocationCard {...locationMock} />);
  });

  it("renders location name", () => {
    const locationName = screen.getByTestId("location-name");

    expect(locationName).toBeInTheDocument();
  });

  it("renders location dimension", () => {
    const locationDimension = screen.getByTestId("location-dimension");

    expect(locationDimension).toBeInTheDocument();
  });

  it("renders location type", () => {
    const locationType = screen.getByTestId("location-type");

    expect(locationType).toBeInTheDocument();
  });
});
