import CharacterFilterInputs from "@/ui/components/filter/filter-inputs/character-filter-inputs";
import LocationFilterInputs from "@/ui/components/filter/filter-inputs/location-filter-inputs";
import EpisodeFilterInputs from "@/ui/components/filter/filter-inputs/episode-filter-inputs";
import { ContextType } from "./context-type";

export const ContextFilter = new Map<string, JSX.Element>([
  [
    ContextType.character,
    <>
      <CharacterFilterInputs />
    </>,
  ],
  [
    ContextType.location,
    <>
      <LocationFilterInputs />
    </>,
  ],
  [
    ContextType.episode,
    <>
      <EpisodeFilterInputs />
    </>,
  ],
]);
