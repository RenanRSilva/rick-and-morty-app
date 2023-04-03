import instance from "infra/axios-instance";
import { CharacterDetailColumn } from "./styles";
import PageBaseDetail from "ui/components/page-base-detail";
import useBreakpoints from "hooks/use-brakpoints";
import ICharacterDetail from "@/domain/pages/character-detail";
import FavoriteCharacter from "ui/components/favorite-character-button";
import { CharacterImg, ItemValue } from "ui/components/character-card/styles";

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps(ctx: any) {
  const { data } = await instance.get("/character/" + ctx.params.slug);

  return {
    props: { character: data },
  };
}

export default function CharacterDetail({
  character,
}: ICharacterDetail): JSX.Element {
  const { isXs } = useBreakpoints();

  return (
    <PageBaseDetail pageName={character.name}>
      <CharacterDetailColumn>
        <h1>
          {character.name} <FavoriteCharacter characterName={character.name} />
        </h1>
        <CharacterImg
          width={isXs ? 250 : 300}
          height={isXs ? 250 : 300}
          src={character.image}
        />
      </CharacterDetailColumn>
      <CharacterDetailColumn>
        <h2>
          Species: <ItemValue>{character.species}</ItemValue>
        </h2>
        <h2>
          Gender: <ItemValue>{character.gender}</ItemValue>
        </h2>
        <h2>
          Status: <ItemValue>{character.status}</ItemValue>
        </h2>
        <h2>
          Origin: <ItemValue>{character.origin.name}</ItemValue>
        </h2>
        <h2>
          Location: <ItemValue>{character.location.name}</ItemValue>
        </h2>
      </CharacterDetailColumn>
    </PageBaseDetail>
  );
}
