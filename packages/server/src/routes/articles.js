import { isNumber } from "lodash";
import getMongo from "../mongo";
import mountSortObj from "../util/sort";

export default async function fetchArticles(req, res) {
  const { page: _page = 0, quantity: _quantity = 50, text, order } = req.query;
  const page = Number(isNumber(Number(_page)) && _page >= 1 ? _page : 1);
  const quantity = Number(isNumber(Number(_quantity)) && _quantity >= 1 ? _quantity : 1);
  let connection;

  try {
    connection = await getMongo.connect();

    const db = connection.db("SpaceFlight");
    const Articles = db.collection("Articles");

    const filter = { title: text ? new RegExp(text, "ig") : { $exists: true } };

    const cursor = Articles.find(filter)
      .limit(quantity)
      .skip(Math.floor(quantity * (page - 1)))
      .sort(mountSortObj(order));

    const articles = await cursor.toArray();

    res.contentType("application/json").send(articles);
    await connection.close();
  } catch (e) {
    console.error(e);
    res.status(500).send(e);

    if (connection) await connection.close();
  }
}
