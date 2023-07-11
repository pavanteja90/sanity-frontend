import { cdnClient } from "./sanity-client.service";

export const fetchRatingsCards = async (): Promise<any[]> => {
  const ratings = await cdnClient.fetch(`*[_type == "ratings"] {
      _id,
      title,
      slug
  }`);
  return ratings;
};
