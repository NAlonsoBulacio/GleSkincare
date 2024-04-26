import React, { useState } from "react";
import Stars from "./Stars";
import star from "../../assets/star.svg";
import { reviews } from "./AllReviews";

const Reviews = () => {
  const [visibleReviews, setVisibleReviews] = useState(3);
  const maxVisibleReviews = 3; // Máximo número de reviews visibles

  const handleShowMore = () => {
    if (visibleReviews + 3 <= reviews.length) {
      setVisibleReviews(visibleReviews + 3);
    }
  };

  const handleShowLess = () => {
    if (visibleReviews > maxVisibleReviews) {
      setVisibleReviews(visibleReviews - 3);
    }
  };

  return (
    <div className="py-8">
      <div>
        <div className="w-full flex justify-center">
          <h1 className="text-gray-700 text-4xl mx-2">4.8</h1>
          <div className="flex h-8">
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
          </div>
        </div>
        <div className="space-y-10">
          {reviews.slice(0, visibleReviews).map((review, index) => (
            <div
              key={index}
              className=" border-b-[1px] border-gray-400 py-2 flex"
            >
              <div className={`space-y-2 ${review.img ? "w-[73%]" : "w-full"}`}>
                <div className="flex gap-x-2 ">
                  <h1 className="font-sans-600 text-lg">{review.name}</h1>
                  <h1 className="text-green-600 text-lg font-sans-500">
                    Verified Buyer
                  </h1>
                </div>
                <div>
                  <Stars starsRate={review.starRate === "4" ? true : false} />
                </div>
                <div>
                  <h1 className="text-left text-lg font-sans-800">
                    {review.title}
                  </h1>
                </div>
                <div className="flex items-start ">
                  <h1 className="font-sans-400 text-md text-gray-700 text-left">
                    {review.review}
                  </h1>
                </div>
                <div>
                  <p className="font-sans-400 text-gray-500 text-sm text-left">
                    {review.date}
                  </p>
                </div>
              </div>

              {review.img ? (
                <div className="w-[25%] lg:w-[10%] ml-0 lg:ml-8">
                  <img src={review.img} alt="" />
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
          {reviews.length > maxVisibleReviews && (
            <div className="text-center">
              <button
                onClick={handleShowLess}
                className="text-blue-600 font-sans-600 underline"
              >
                Show Less
              </button>
              {" | "}
              <button
                onClick={handleShowMore}
                className="text-blue-600 font-sans-600 underline"
              >
                Show More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
