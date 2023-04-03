import { ICharacter } from "domain/entities/character";
import MasonryContainer from "ui/components/masonry";
import { QueryClient, dehydrate } from "react-query";
import { useCharacter } from "hooks/character";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import ICharacterFilter from "@/domain/filters/character";
import ErrorFeedback from "ui/components/error-feedback";
import LoadingPortal from "ui/components/loading-portal";
import PageBase from "ui/components/page-base";
import useBreakpoints from "hooks/use-brakpoints";
import CharacterCard from "ui/components/character-card";
import { getCharacter } from "infra/get-character";

export default function Character() {
  const router = useRouter();
  const [page, setPage] = useState<any>(router.query.page || 1);
  const [requestQuery, setRequestQuery] = useState<ICharacterFilter>({
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
  });
  const { data, isLoading, error } = useCharacter(page, requestQuery, "");

  const { isXs } = useBreakpoints();

  return (
    <PageBase
      page={page}
      pages={data ? data.info.pages : 0}
      setRequestQuery={setRequestQuery}
      setPage={setPage}
      requestQuery={requestQuery}
    >
      {!isLoading ? (
        <MasonryContainer columns={isXs ? 1 : 4}>
          {data &&
            data.results.map((character: ICharacter) => (
              <Link
                key={character.id}
                href={`/character/[slug]`}
                as={`/character/${character.id}`}
              >
                <CharacterCard
                  name={character.name}
                  image={character.image}
                  gender={character.gender}
                  species={character.species}
                  status={character.status}
                />
              </Link>
            ))}
        </MasonryContainer>
      ) : (
        <LoadingPortal />
      )}
      {error && <ErrorFeedback />}
    </PageBase>
  );
}

interface ICharacterCtx {
  query: any;
}

export async function getServerSideProps({ query }: ICharacterCtx) {
  const queryClient = new QueryClient();

  let page = 1;
  if (query.page) {
    page = parseInt(query.page);
  }

  await queryClient.prefetchQuery("character", getCharacter);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
