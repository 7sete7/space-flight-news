import express from "express";
import importData from "./importData";

import { articles, articleById } from "./routes";

const app = express();

app.get("/", (_, res) => res.status(200).send("Fullstack Challenge 2021 🏅 - Space Flight News"));

app.get("/articles", articles);
app.get("/article/:id", articleById);
app.get("/import", importData)

app.listen(8000, () => console.log("listening"));