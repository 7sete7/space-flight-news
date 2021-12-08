import { MongoClient } from "mongodb";
import axios from "axios";

export default (req, res) => {
  const startTime = process.hrtime();

  MongoClient.connect(process.env.MONGO_URL, {
    connectTimeoutMS: 1000 * 60,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(async connection => {
    console.log("connected");
    const db = connection.db("SpaceFlight");
    const Articles = db.collection("Articles");

    const operations = [];
    try {
      for await (const articles of getArticles()) {
        operations.push(...articles.map(article => ({
          replaceOne: { filter: { id: article.id }, replacement: article, upsert: true }
        })));
      }

      const { nInserted } = await Articles.bulkWrite(operations);
      const payload = {
        operations: operations.length,
        inserted: nInserted,
        time: parseFloat(process.hrtime(startTime).join("."))
      }
      res.contentType("application/json").send(payload);
      
    } catch(e) {
      console.error(e);
    }
    connection.close();
  })
  .catch(error => {
    console.error(error);
    res.statusCode(500).end();
  });
};

async function* getArticles() {
  let start = 0;
  let data;
  do {
    try {
      ({ data } = await axios.get(`https://api.spaceflightnewsapi.net/v3/articles?_limit=500&_sort=id&_start=${start}`));
      if (data && data.length) yield data;
      start += 1000
    } catch(e) {
      console.error(e);
      break;
    }
  } while(data != null && (data.length > 0 || start < 10e3));
  return null;
}
