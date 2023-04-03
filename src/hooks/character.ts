import ICharacterFilter from "@/domain/filters/character";
import { getCharacter } from "infra/get-character";
import { useQuery } from "react-query";

export const useCharacter = (page: string, { name, status, species, type, gender }: ICharacterFilter, id: string) => {
  return useQuery(['character',
    { page: page },
    { name: name },
    { status: status },
    { species: species },
    { type: type },
    { gender: gender },
    { id: id }
  ],
    getCharacter
  );
}
