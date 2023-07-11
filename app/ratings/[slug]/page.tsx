import { Rating } from "@/models/rating";
import { fetchRating } from "@/services/fetch-data.service";
import SRProvider from "./ratings-sb.provider";
import Navbar from "@/components/navbar/navbar";

export default async function StarRatings({
  params,
}: {
  params: { slug: string };
}) {
  const rating: Rating = await fetchRating("ratings/" + params.slug);
  return (
    <>
      <section
        style={{
          padding: "0.5rem 0",
        }}
      >
        <Navbar
          content={rating.pageBuilder?.find(
            (child) => child._type === "navbar"
          )}
        />
      </section>
      <section className="children">
        {rating.pageBuilder?.map((component) => (
          <div
            key={component._key || component._id}
            style={{
              margin: "2.5rem 0",
            }}
          >
            <SRProvider child={component} />
          </div>
        ))}
      </section>
    </>
  );
}
