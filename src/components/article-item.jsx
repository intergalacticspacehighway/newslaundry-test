import React from "react";
import format from "date-fns/format";

export function ArticleItem({ item }) {
  return (
    <div className="max-w-md rounded overflow-hidden shadow">
      <div className="overflow-hidden">
        <img
          className="w-full h-full transform hover:scale-150 transition ease-in-out duration-300"
          src="https://i.pinimg.com/originals/b4/c2/d7/b4c2d7c9fb28e69bff7ec8a1e37b8b42.jpg"
          alt="Sunset in the mountains"
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          {item.item ? item.item.headline[0] : null}
        </div>
        <p className="text-gray-700 text-base">{item.story.subheadline}</p>
      </div>
      <div class="px-6 py-4 flex items-center">
        <img
          class="w-10 h-10 rounded-full mr-4"
          src={
            item.story.authors
              ? item.story.authors[0]["avatar-url"]
              : "https://i.ya-webdesign.com/images/funny-png-avatar-2.png"
          }
          alt={item.story["author-name"]}
        />
        <div class="text-sm">
          <p class="text-gray-900 leading-none">{item.story["author-name"]}</p>
          <p class="text-gray-600">
            {format(item.story["content-created-at"], "dd MMM yyyy")}
          </p>
        </div>
      </div>
      <div className="px-6 py-4">
        {item.story.tags.map((tag) => {
          return (
            <span className="inline-block bg-gray-200 rounded-full px-3 my-2 py-1 text-sm font-semibold text-gray-700 mr-2">
              #{tag.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}
