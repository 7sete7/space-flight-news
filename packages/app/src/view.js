import { Container } from "@mui/material";

import Header from "./components/Header";
import Hero from "./components/Hero";
import ArticleList from "./components/ArticleList";

const App = () => (
  <>
    <Header />
    <Hero />

    <Container maxWidth="sm" sx={{ padding: "3rem 5px" }}>
      <ArticleList />
    </Container>
  </>
);

export default App;
