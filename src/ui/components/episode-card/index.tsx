import IEpisodeCard from "@/domain/components/episode-card";
import Card from "../card";
import { ItemValue } from "../character-card/styles";
import ConnectedTvIcon from "@mui/icons-material/ConnectedTv";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";

export default function EpisodeCard({
  name,
  episode,
  airDate,
}: IEpisodeCard): JSX.Element {
  return (
    <Card>
      <h1 data-testid="episode-name">
        <ItemValue>{name}</ItemValue>
      </h1>
      <h2 data-testid="episode-episode">
        <SmartDisplayIcon /> Episode: <ItemValue>{episode}</ItemValue>
      </h2>
      <h2 data-testid="episode-air-date">
        <ConnectedTvIcon /> Air date: <ItemValue>{airDate}</ItemValue>
      </h2>
    </Card>
  );
}
