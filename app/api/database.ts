import { MongoClient } from "mongodb";

const url = process.env.MONGO_DB_URL;

let connectDB: Promise<MongoClient>;

if (url !== undefined) {
  if (process.env.NODE_ENV === "development") {
    if (!global._mongo) {
      global._mongo = new MongoClient(url).connect();
    }
    connectDB = global._mongo;
  } else {
    connectDB = new MongoClient(url).connect();
  }
}

export { connectDB };
