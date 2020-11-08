const express = require("express");
const redis = require("redis");

const app = express();
const client = redis.createClient({
  host: "redis-server",
  port: 6379,
});
client.set("visists", 0);

app.get("/", (req, res) => {
  client.get("visists", (err, visists) => {
    client.set("visists", parseInt(visists) + 1);
    res.send(`number of visists is ${parseInt(visists)}`);
  });
});

app.listen(5000, () => {
  console.log("listening on port 5000");
});
