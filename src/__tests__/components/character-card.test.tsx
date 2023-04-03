import { RenderResult, render, screen } from "@testing-library/react";
import CharacterCard from "../../ui/components/character-card";
import { mockCharacter } from "../../data/mocks/mock-character-card";
let characterCard: RenderResult;

describe("CharacterCard", () => {
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
    const characterMock = mockCharacter();

    characterCard = render(<CharacterCard {...characterMock} />);
  });

  it("renders character name", () => {
    const characterName = screen.getByTestId("character-name");

    expect(characterName).toBeInTheDocument();
  });

  it("renders character image", () => {
    const characterImage = screen.getByTestId("character-image");

    expect(characterImage).toBeInTheDocument();
  });

  it("renders character species", () => {
    const characterSpecies = screen.getByTestId("character-species");

    expect(characterSpecies).toBeInTheDocument();
  });

  it("renders character status", () => {
    const characterStatus = screen.getByTestId("character-status");

    expect(characterStatus).toBeInTheDocument();
  });

  it("renders character name", () => {
    const characterName = screen.getByTestId("character-name");

    expect(characterName).toBeInTheDocument();
  });
});
