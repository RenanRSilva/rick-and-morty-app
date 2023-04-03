import { RenderResult, render, screen } from "@testing-library/react";
import { mockEpisode } from "../../data/mocks/mock-episode";
import EpisodeCard from "../../ui/components/episode-card";
let episodeCard: RenderResult;

describe("EpisodeCard", () => {
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
    const episodeMock = mockEpisode();

    episodeCard = render(<EpisodeCard {...episodeMock} />);
  });

  it("renders episode name", () => {
    const episodeName = screen.getByTestId("episode-name");

    expect(episodeName).toBeInTheDocument();
  });

  it("renders episode air date", () => {
    const episodeAirDate = screen.getByTestId("episode-air-date");

    expect(episodeAirDate).toBeInTheDocument();
  });

  it("renders episode episode", () => {
    const episodeEpisode = screen.getByTestId("episode-episode");

    expect(episodeEpisode).toBeInTheDocument();
  });
});
