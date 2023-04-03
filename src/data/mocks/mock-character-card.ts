import ICharacterCard from "@/domain/components/character-card";
import { faker } from "@faker-js/faker";

export const mockCharacter = (): ICharacterCard => ({
  gender: faker.datatype.string(5),
  image: faker.image.avatar(),
  species: faker.datatype.string(5),
  status: faker.datatype.string(5),
  name: faker.datatype.string(5),
})
