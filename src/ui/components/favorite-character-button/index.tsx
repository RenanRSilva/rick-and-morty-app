import { useContext } from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { FavoriteCharacterButton } from "./styles";
import { FavoriteCharacterContext } from "@/main/context/context";

interface IFavoriteCharacter {
  characterName: string;
}

export default function FavoriteCharacter({
  characterName,
}: IFavoriteCharacter): JSX.Element {
  const { favoriteCharacter, setFavoriteCharacter } = useContext(
    FavoriteCharacterContext
  );
  const handleFavoriteCharacter = (
    e: React.ChangeEvent<HTMLInputElement>,
    characterName: string
  ) => {
    e.preventDefault();
    characterName != favoriteCharacter
      ? setFavoriteCharacter(characterName)
      : setFavoriteCharacter("");
  };

  return (
    <FavoriteCharacterButton
      data-testid="button"
      onClick={(e: any) => handleFavoriteCharacter(e, characterName)}
    >
      {characterName === favoriteCharacter ? (
        <StarIcon style={{ fill: "#8a6d0b" }} data-testid="favorite" />
      ) : (
        <StarBorderIcon
          style={{ stroke: "#8a6d0b" }}
          data-testid="not-favorite"
        />
      )}
    </FavoriteCharacterButton>
  );
}
