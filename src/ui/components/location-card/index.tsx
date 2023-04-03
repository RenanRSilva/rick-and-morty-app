import Card from "../card";
import ILocationCard from "@/domain/components/location-card";
import { ItemValue } from "../character-card/styles";
import RocketIcon from "@mui/icons-material/Rocket";
import PublicIcon from "@mui/icons-material/Public";

export default function LocationCard({
  name,
  dimension,
  type,
}: ILocationCard): JSX.Element {
  return (
    <Card>
      <h1 data-testid="location-name">
        <ItemValue>{name}</ItemValue>
      </h1>
      <h2 data-testid="location-dimension">
        <RocketIcon /> Dimension: <ItemValue>{dimension}</ItemValue>
      </h2>
      <h2 data-testid="location-type">
        <PublicIcon />
        {"  "}
        Type: <ItemValue>{type}</ItemValue>
      </h2>
    </Card>
  );
}
