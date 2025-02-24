const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://localhost:27017");
async function run() {
  await client.connect();
  const db = client.db("test");
  const users = db.collection("users");
  console.log(await users.findOne());
}
run();
