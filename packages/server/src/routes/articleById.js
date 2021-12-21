import { isNumber } from "lodash";
import getMongo from "../mongo";

export default async function fetchArticleById(req, res) {
  const { id: _id } = req.params;
  if (!isNumber(Number(_id)) || _id < 1) return res.status(400).send("parameter-id-invalid");
  const id = Number(_id);
  let connection;
  
  try {
    connection = await getMongo.connect();

    const db = connection.db("SpaceFlight");
    const Articles = db.collection("Articles");

    const cursor = Articles.find({ id }).limit(1);
    const articles = await cursor.toArray();

    if (articles.length === 0) return res.status(404).end();
    
    res.status(200).contentType("application/json").send(articles[0]);
    await connection.close();
  } catch(e) {
    console.error(e);
    res.status(500).send(e);

    if (connection)
      await connection.close();
  }
}