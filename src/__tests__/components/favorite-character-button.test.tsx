import {
  RenderResult,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import FavoriteCharacterButton from "../../ui/components/favorite-character-button";
import { mockCharacter } from "../../data/mocks/mock-character-card";
import { ContextProvider } from "@/main/context/context";
let favoriteCharacterButton: RenderResult;

describe("FavoriteCharacter", () => {
  const characterMock = mockCharacter();

  beforeEach(() => {
    favoriteCharacterButton = render(
      <ContextProvider>
        <FavoriteCharacterButton characterName={characterMock.name} />
      </ContextProvider>
    );
  });

  it("show not favorite icon initially", () => {
    const notFavoriteIcon = screen.getByTestId("not-favorite");
    const favoriteIcon = screen.queryByTestId("favorite");

    expect(notFavoriteIcon).toBeInTheDocument();
    expect(favoriteIcon).not.toBeInTheDocument();
  });
});
