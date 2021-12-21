import { isNumber } from "lodash";
import getMongo from "../mongo";

export default async function fetchArticles(req, res) {
  const { page: _page = 0, quantity: _quantity = 50 } = req.query;
  const page = Number(isNumber(Number(_page)) && _page >= 0 ? _page : 0);
  const quantity = Number(isNumber(Number(_quantity)) && _quantity >= 1 ? _quantity : 1);
  let connection;

  try {
    connection = await getMongo.connect();

    const db = connection.db("SpaceFlight");
    const Articles = db.collection("Articles");

    const cursor = Articles.find({}).limit(quantity).skip(Math.floor(quantity * page));
    const articles = await cursor.toArray();

    res.contentType("application/json").send(articles);
    await connection.close();
  } catch(e) {
    console.error(e);
    res.status(500).send(e);

    if (connection)
      await connection.close();
  }
}