import instance from "infra/axios-instance";
import PageBaseDetail from "ui/components/page-base-detail";
import IEpisode from "@/domain/entities/episode";
import { DetailColumn } from "@/styles/character/styles";

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps(ctx: any) {
  const { data } = await instance.get("/episode/" + ctx.params.slug);

  return {
    props: { episode: data },
  };
}

interface IEpisodeDetail {
  episode: IEpisode;
}

export default function EpisodeDetail({
  episode,
}: IEpisodeDetail): JSX.Element {
  return (
    <PageBaseDetail pageName={episode.name}>
      <DetailColumn>
        <h1>{episode.name}</h1>
        <h2>Episode: {episode.episode}</h2>
        <h2>Air date: {episode.air_date}</h2>
      </DetailColumn>
    </PageBaseDetail>
  );
}
