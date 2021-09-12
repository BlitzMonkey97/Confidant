import { MongoClient } from "mongodb";

const { MONGODB_URI, MONGODB_DB } = process.env;

if (!MONGODB_DB || !MONGODB_URI) {
  throw new Error("Error");
}

let cached = global.mongo;

if (!cached) cached = global.mongo = {};

export async function connectToDatabase(num) {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    cached.promise = MongoClient.connect(MONGODB_URI, opts).then((client) => {
      return { client, db: client.db(MONGODB_DB) };
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
