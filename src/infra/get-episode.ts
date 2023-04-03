import RequestQueryMaker from "@/domain/helpers/request-query-maker";
import instance from "./axios-instance";

export const getEpisode = async (key: any) => {
  if (key.queryKey.id) {
    const { data } = await instance.get("/episode/" + key.queryKey.id);
    return data;
  }

  const { data } = await instance.get(
    "/episode" + RequestQueryMaker(key, true)
  );
  return data;
};
