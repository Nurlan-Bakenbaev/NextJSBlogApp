import { MongoClient } from "mongodb";

const uri = process.env.DATABASE_URL;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

export async function checkDatabaseConnection() {
  try {
    const client = new MongoClient(uri, options);
    await client.connect();
    console.log("Connected to MongoDB!!!");
    await client.close();
    return true;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return false;
  }
}
