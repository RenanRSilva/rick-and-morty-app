import IEpisodeFilter from "@/domain/filters/episode";
import { getEpisode } from "infra/get-episode";
import { useQuery } from "react-query";

export const useEpisode = (page: string, { name, episode }: IEpisodeFilter, id: string) => {
  return useQuery(['location',
    { page: page },
    { name: name },
    { episode: episode },
    { id: id }
  ],
    getEpisode
  );
}
