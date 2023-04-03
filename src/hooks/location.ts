import ILocationFilter from "@/domain/filters/location";
import { getLocation } from "infra/get-location";
import { useQuery } from "react-query";

export const useLocation = (page: string, { name, type, dimension }: ILocationFilter, id: string) => {
  return useQuery(['location',
    { page: page },
    { name: name },
    { type: type },
    { dimension: dimension },
    { id: id }
  ],
    getLocation
  );
}
