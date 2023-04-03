import RequestQueryMaker from "@/domain/helpers/request-query-maker";
import instance from "./axios-instance";

export const getLocation = async (key: any) => {
  if (key.queryKey.id) {
    const { data } = await instance.get("/location/" + key.queryKey.id);
    return data;
  }

  const { data } = await instance.get(
    "/location" + RequestQueryMaker(key, true)
  );
  return data;
};
