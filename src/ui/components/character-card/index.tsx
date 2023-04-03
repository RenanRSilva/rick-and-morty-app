import ICharacterCard from "@/domain/components/character-card";
import Card from "../card";
import FavoriteCharacter from "../favorite-character-button";
import { CharacterCardRow, CharacterImg, CharacterRowContent } from "./styles";
import useBreakpoints from "@/hooks/use-brakpoints";
import { ItemValue } from "@/styles/styles";

export default function CharacterCard({
  name,
  image,
  species,
  gender,
  status,
}: ICharacterCard): JSX.Element {
  const { isXs } = useBreakpoints();

  return (
    <Card>
      <CharacterCardRow>
        <h1 data-testid="character-name">
          {name}
          <FavoriteCharacter characterName={name} />
        </h1>
        <CharacterImg
          data-testid="character-image"
          width={isXs ? 250 : 300}
          src={image}
        />
      </CharacterCardRow>
      <CharacterRowContent>
        <h2 data-testid="character-species">
          Species: <ItemValue>{species}</ItemValue>
        </h2>
        <h2 data-testid="character-gender">
          Gender: <ItemValue>{gender}</ItemValue>
        </h2>
        <h2 data-testid="character-status">
          Status: <ItemValue>{status}</ItemValue>
        </h2>
      </CharacterRowContent>
    </Card>
  );
}
