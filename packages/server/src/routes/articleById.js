import { isNumber } from "lodash";
import { MongoClient } from "mongodb";

export default async function fetchArticles(req, res) {
  const { id: _id } = req.params;
  if (!isNumber(Number(_id)) || _id < 1) return res.status(400).send("parameter-id-invalid");
  const id = Number(_id);
  
  try {
    const connection = await MongoClient.connect(process.env.MONGO_URL, {
      connectTimeoutMS: 1000 * 60,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = connection.db("SpaceFlight");
    const Articles = db.collection("Articles");

    const cursor = Articles.find({ id }).limit(1);
    const articles = await cursor.toArray();

    if (articles.length === 0) return res.status(404).end();
    
    res.status(200).contentType("application/json").send(articles[0]);
  } catch(e) {
    console.error(e);
    res.status(500).send(e);
  }
}