import getMongo from "./mongo";
import axios from "axios";

export default async () => {
  const startTime = process.hrtime();

  console.log("start");
  const client = await getMongo.connect();

  try {
    console.log("connected");
    const db = client.db("SpaceFlight");
    const Articles = db.collection("Articles");
    const operations = [];

    for await (const articles of getArticles()) {
      operations.push(
        ...articles.map(article => ({
          replaceOne: { filter: { id: article.id }, replacement: article, upsert: true },
        }))
      );
    }

    const { nInserted } = await Articles.bulkWrite(operations);
    const payload = {
      operations: operations.length,
      inserted: nInserted,
      time: parseFloat(process.hrtime(startTime).join(".")),
    };

    await client.close();
    return payload;
  } catch (e) {
    console.log(parseFloat(process.hrtime(startTime).join(".")));
    console.error(e);

    await client.close();
    throw e;
  }
};

async function* getArticles() {
  let start = 0;
  let data;
  do {
    try {
      ({ data } = await axios.get(
        `https://api.spaceflightnewsapi.net/v3/articles?_limit=500&_sort=id&_start=${start}`
      ));
      if (data && data.length) yield data;
      start += 1000;
    } catch (e) {
      console.error(e);
      break;
    }
  } while (data != null && (data.length > 0 || start < 10e3));
  return null;
}
