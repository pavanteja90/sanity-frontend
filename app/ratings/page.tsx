import React from "react";
import { fetchRatingsCards } from "@/services/ratings";
import { Rating } from "@/models/rating";

const page = async () => {
  const ratings: Rating[] = await fetchRatingsCards();

  return (
    <>
      <h1
        style={{
          fontSize: "42px",
          fontWeight: "600",
          lineHeight: "48px",
          letterSpacing: "0em",
          textAlign: "center",
          padding: '60px 0',
          color: '#1899d6'
        }}
      >
        Compare Now
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "stretch",
          gap: "30px",
        }}
      >
        {ratings.map((rating) => {
          return (
            <div
              key={rating._id}
              className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              style={{ width: "400px", display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}
            >
              <a href={rating?.slug?.current}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {rating.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                SLUG: {rating?.slug?.current}
              </p>
              <a
                href={rating?.slug?.current}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none"
                style={{backgroundColor: '#1899d6', alignSelf: 'end'}}
              >
                Compare Now
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default page;
