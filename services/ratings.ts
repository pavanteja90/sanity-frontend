import { getClient } from "./sanity-client.service";

export const fetchRatingsCards = async (): Promise<any[]> => {
  const ratings = await getClient().fetch(`*[_type == "ratings"] {
      _id,
      title,
      slug
  }`);
  return ratings;
};
