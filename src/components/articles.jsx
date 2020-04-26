import React from "react";
import { useArticles } from "../services";
import { ArticleItem } from "./article-item";

export function Articles() {
  const {
    state: { data, loading, error },
  } = useArticles();
  console.log("data ", data);

  return (
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
      {data.items.map((article) => {
        return (
          <div className="mx-5 my-5">
            <ArticleItem key={article.id} item={article} />
          </div>
        );
      })}
    </div>
  );
}

export default Articles;
