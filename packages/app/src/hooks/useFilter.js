import { useState } from "react";

const useFilter = () => {
  const [filter, setFilter] = useState({ order: "publishedAt:desc", page: 1, loading: true, text: "", shouldReset: false });

  const mergeFilter = value => setFilter(f => ({ ...f, ...value, page: value.shouldReset ? 1 : value.page || f.page }));

  return { mergeFilter, filter };
};

export default useFilter;
