import express from "express";
import importData from "./importData";
import { CronJob } from "cron";
import cors from "cors";

import { articles, articleById } from "./routes";

const app = express();

app.use(cors())

app.get("/", (_, res) => res.status(200).send("Fullstack Challenge 2021 🏅 - Space Flight News"));

app.get("/articles", articles);
app.get("/article/:id", articleById);
app.get("/import", (_, res) => importData().then(res.contentType("application/json").send).catch(res.status(500).send));

app.listen(8000, () => console.log("listening"));

new CronJob("0 9 * * *", null, importData, true, "America/Los_Angeles").start();
