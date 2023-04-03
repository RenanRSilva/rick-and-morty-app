import instance from "infra/axios-instance";
import { CharacterDetailColumn } from "../character/styles";
import PageBaseDetail from "ui/components/page-base-detail";
import { ILocation } from "@/domain/entities/location";
import { ItemValue } from "@/ui/components/character-card/styles";
import RocketIcon from "@mui/icons-material/Rocket";
import PublicIcon from "@mui/icons-material/Public";

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps(ctx: any) {
  const { data } = await instance.get("/location/" + ctx.params.slug);

  return {
    props: { location: data },
  };
}

interface ILocationDetail {
  location: ILocation;
}

export default function LocationDetail({
  location,
}: ILocationDetail): JSX.Element {
  return (
    <PageBaseDetail pageName={location.name}>
      <CharacterDetailColumn>
        <h1>
          <ItemValue>{location.name}</ItemValue>
        </h1>
        <h2>
          <RocketIcon />
          Dimension: <ItemValue>{location.dimension}</ItemValue>
        </h2>
        <h2>
          <PublicIcon />
          {"  "}Type: <ItemValue>{location.type}</ItemValue>
        </h2>
      </CharacterDetailColumn>
    </PageBaseDetail>
  );
}
