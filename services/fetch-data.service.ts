import { Rating } from "@/models/rating";
import { getClient } from "./sanity-client.service";

export const fetchRating = async (slug: string): Promise<Rating> => {
  try {
    return await getClient()
      .fetch(`*[_type == "ratings" && slug.current == "${slug}"]`)
      .then((response) => {
        console.log(response[0]);
        return response[0]
      });
  } catch (error) {
    throw new Error(`Unable to fetch rating: ${error}`);
  }
};
