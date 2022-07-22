import express from "express";
import { readFile } from "fs";
import cors from "cors";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get("/ghibli-data", (req, res) => {
  readFile("./ghibli-data.json", "utf-8", (err, data) => {
    if (err) throw err;
    const movies = JSON.parse(data);
    res.send(movies);
  });
});

app.listen(port, () => {
  console.log(`app listening on port ${port}!`);
});
