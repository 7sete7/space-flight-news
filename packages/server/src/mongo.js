import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_URL, {
  connectTimeoutMS: 1000 * 60 * 60,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default client;
