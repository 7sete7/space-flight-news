import { Container } from "@mui/material";

import Header from "./components/Header";
import Hero from "./components/Hero";
import ArticleList from "./components/ArticleList";

import useFilter from "./hooks/useFilter";

const App = () => {
  const usingFilter = useFilter();

  return (
    <>
      <Header {...usingFilter} />
      <Hero />

      <Container maxWidth="sm" sx={{ padding: "3rem 5px" }}>
        <ArticleList {...usingFilter} />
      </Container>
    </>
  );
};

export default App;
