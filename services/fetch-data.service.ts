import { Rating } from "@/models/rating";
import { cdnClient } from "./sanity-client.service";

export const fetchRating = async (slug: string): Promise<Rating> => {
  try {
    return await cdnClient
      .fetch(`*[_type == "ratings" && slug.current == "${slug}"]`)
      .then((response) => response[0]);
  } catch (error) {
    throw new Error(`Unable to fetch rating: ${error}`);
  }
};
