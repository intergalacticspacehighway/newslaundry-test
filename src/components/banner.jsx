import React from "react";
import { randomImages } from "../services/utils";

export function Banner({ coverNews }) {
  if (!coverNews) {
    return null;
  }
  return (
    <div
      className="flex justify-center relative py-5 overflow-hidden"
      style={{ height: "500px" }}
    >
      <img
        src={randomImages[0]}
        alt="Banner"
        className="object-cover hover:scale-105 transform transition ease-in-out duration-700"
      />
      <div
        style={{ top: "50%" }}
        className="flex flex-col justify-center xl:pl-20 lg:px-5 px-5 absolute left-0 bg-pink-100 py-5 imperfect-border"
      >
        <h1 className="font-bold text-lg md:text-2xl xl:text-5xl">
          {coverNews.story.headline}
        </h1>
        <h5 className="text-gray-500 text-sm md:text-md xl:text-lg xl:w-6/12">
          {coverNews.story.subheadline}
        </h5>
        <div className="text-gray-500 text-sm pt-1 font-bold xl:text-lg">
          - {coverNews.story["author-name"]}
        </div>
      </div>
    </div>
  );
}

export default Banner;
