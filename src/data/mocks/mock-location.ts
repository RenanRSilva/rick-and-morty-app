import ILocationCard from "@/domain/components/location-card";
import { faker } from "@faker-js/faker";

export const mockLocation = (): ILocationCard => ({
  dimension: faker.datatype.string(5),
  type: faker.datatype.string(5),
  name: faker.datatype.string(5),
})
