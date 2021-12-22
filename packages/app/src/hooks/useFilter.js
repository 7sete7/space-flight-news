import { useState } from "react";

const useFilter = () => {
  const [filter, setFilter] = useState({ order: "", page: 1, loading: true, text: "", shouldReset: false });

  const mergeFilter = value => setFilter(f => ({ ...f, ...value }));

  return { mergeFilter, filter };
};

export default useFilter;
