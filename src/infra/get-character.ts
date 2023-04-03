import RequestQueryMaker from "@/domain/helpers/request-query-maker";
import instance from "./axios-instance";

export const getCharacter = async (key: any) => {
  if (key.queryKey.id) {
    const { data } = await instance.get("/character/" + key.queryKey.id);
    return data;
  }

  const { data } = await instance.get(
    "/character" + RequestQueryMaker(key, true)
  );
  return data;
};
