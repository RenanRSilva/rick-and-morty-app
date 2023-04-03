import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useEpisode } from "hooks/episode";
import IEpisode from "@/domain/entities/episode";
import IEpisodeFilter from "@/domain/filters/episode";
import MasonryContainer from "ui/components/masonry";
import ErrorFeedback from "ui/components/error-feedback";
import PageBase from "ui/components/page-base";
import LoadingPortal from "ui/components/loading-portal";
import useBreakpoints from "hooks/use-brakpoints";
import EpisodeCard from "ui/components/episode-card";

export default function Episodes() {
  const router = useRouter();
  const [page, setPage] = useState<any>(router.query.page || 1);
  const [requestQuery, setRequestQuery] = useState<IEpisodeFilter>({
    name: "",
    episode: "",
  });

  const { data, isLoading, error } = useEpisode(page, requestQuery, "");

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
            data.results.map((episode: IEpisode) => (
              <Link
                key={episode.id}
                href={`/episode/[slug]`}
                as={`/episode/${episode.id}`}
              >
                <EpisodeCard
                  name={episode.name}
                  airDate={episode.air_date}
                  episode={episode.episode}
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
