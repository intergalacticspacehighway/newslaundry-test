import React from "react";
import { useArticles } from "../services";
import { ArticleItem } from "./article-item";

export function Articles({ data }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
      {data.items.map((article) => {
        return (
          <div className="mx-5 my-5" key={article.id}>
            <ArticleItem item={article} />
          </div>
        );
      })}
    </div>
  );
}

export default Articles;
