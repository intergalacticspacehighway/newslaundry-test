import React from "react";
import { ArticleItem } from "./article-item";
import { Articles as MasonryArticles } from "./Masonry";

export function Articles({ data }) {
  return (
    <MasonryArticles>
      {data.items.map((article) => {
        return (
          <div className="mx-5 my-5" key={article.id}>
            <ArticleItem item={article} />
          </div>
        );
      })}
    </MasonryArticles>
  );
}

export default Articles;
