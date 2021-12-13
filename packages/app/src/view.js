import { Container } from "@mui/material";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Article from "./components/Article";

const App = () => (
  <>
    <Header />
    <Hero />

    <Container maxWidth="sm" sx={{ padding: "3rem 5px" }}>
    {
      Array(5).fill(1).map((_, index) => <Article orientation={index % 2} /> )
    }
    </Container>
  </>
);

export default App;
