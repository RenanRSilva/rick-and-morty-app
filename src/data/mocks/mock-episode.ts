import IEpisodeCard from "@/domain/components/episode-card";
import { faker } from "@faker-js/faker";

export const mockEpisode = (): IEpisodeCard => ({
  episode: faker.datatype.string(5),
  airDate: faker.datatype.string(5),
  name: faker.datatype.string(5),
})
