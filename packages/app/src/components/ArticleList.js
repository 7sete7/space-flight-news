import React, { useEffect, useState, useCallback } from "react";
import Article from "./Article";

import fetchArticles from "../DAL/fetchArticles";

import { CircularProgress, Box, Slide, Button } from "@mui/material";

const ArticleList = ({ filter, mergeFilter }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    mergeFilter({ loading: true });

    fetchArticles(filter).then(data => {
      if (data) {
        setArticles(current => (filter.shouldReset ? data : current.concat(data)));
        mergeFilter({ loading: false });
      } else {
        mergeFilter({ isLastPage: true, loading: false });
      }

      updateFeed();
    });
  }, [filter.order, filter.page, filter.text, setArticles]);

  const onLoadMoreClick = useCallback(() => mergeFilter({ page: filter.page + 1, shouldReset: false }), [filter.page]);
  const updateFeed = useCallback(() => {
    if (filter.shouldReset) {
      mergeFilter({ shouldReset: false });
    }
  }, [filter.shouldReset, filter.loading]);

  return (
    <Box
      width={1}
      height={1}
      display="flex"
      alignItems="center"
      flexDirection={filter.shouldReset ? "column-reverse" : "column"}
    >
      {(!filter.loading || articles.length > 0) && (
        <Slide direction="right" in={!filter.shouldReset}>
          <div>
            {articles.map((data, index) => (
              <Article data={data} orientation={index % 2} />
            ))}
          </div>
        </Slide>
      )}

      {filter.loading && <CircularProgress />}

      {!filter.loading && (
        <Box width={1} textAlign="center">
          <Button variant="outlined" color="secondary" onClick={onLoadMoreClick}>
            Carregar mais posts
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default ArticleList;
