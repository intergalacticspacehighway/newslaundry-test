import React from "react";
import format from "date-fns/format";
import { randomImages } from "../services/utils";

export function ArticleItem({ item }) {
  const randomImage =
    randomImages[Math.floor(Math.random() * randomImages.length)];

  return (
    <div className="max-w-md rounded overflow-hidden shadow">
      <a
        href={item.story.url}
        title="Read more"
        target="__blank"
        rel="noopener noreferrer"
      >
        <div className="overflow-hidden relative">
          <img
            className="w-full h-full transform hover:scale-150 transition ease-in-out duration-300"
            src={randomImage}
            alt="Article banner"
          />
          <div className="font-bold text-lg mb-2 absolute bottom-0 bg-white px-4">
            {item.story.headline}
          </div>
        </div>
        <div className="px-6 py-4">
          <p className="text-gray-700 text-base">{item.story.subheadline}</p>
        </div>
      </a>

      <a
        href={"/" + item.story.authors[0].slug}
        title={item.story["assignee-name"]}
      >
        <div className="px-6 py-4 flex items-center">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src={
              item.story.authors
                ? item.story.authors[0]["avatar-url"]
                : "https://i.ya-webdesign.com/images/funny-png-avatar-2.png"
            }
            alt={item.story["author-name"]}
          />

          <div className="text-sm">
            <p className="text-gray-900 leading-none">
              {item.story["author-name"]}
            </p>
            <p className="text-gray-600">
              {format(item.story["content-created-at"], "dd MMM yyyy")}
            </p>
          </div>
        </div>
      </a>

      <div className="px-6 py-4">
        {item.story.tags.map((tag) => {
          return (
            <span
              className="inline-block bg-gray-200 rounded-full px-3 my-2 py-1 text-sm font-semibold text-gray-700 mr-2"
              key={tag.id}
            >
              #{tag.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}
