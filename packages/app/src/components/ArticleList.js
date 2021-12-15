import React, { useEffect, useState } from "react";
import Article from "./Article";

import fetchArticles from "../DAL/fetchArticles";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [config, setConfig] = useState({ order: "", page: 1, loading: true });

  useEffect(() => {
    if (!config.loading) setConfig(c => ({ ...c, loading: true }));

    fetchArticles(config).then(data => {
      if (data) {
        setArticles(data);
        setConfig(c => ({ ...c, loading: false }));
      } else setConfig(c => ({ ...c, isLastPage: true }));
    });
  }, [config.order, config.page]);

  return (
    <>
      {config.loading && <h3>Loading</h3>}

      {!config.loading && articles.fill(1).map((_, index) => <Article orientation={index % 2} />)}
    </>
  );
};

export default ArticleList;
