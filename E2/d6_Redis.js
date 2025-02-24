const redis = require("redis");
const client = redis.createClient();
client.set("key", "value", redis.print);
client.get("key", (err, reply) => console.log(reply));
