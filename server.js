import express from "express";
import { readFile } from "fs";
import cors from "cors";
// import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 5000;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// // API calls
// app.get("/api/hello", (req, res) => {
//   res.send({ express: "Hello From Express" });
// });

app.get("api/ghibli-data", (req, res) => {
  readFile("/ghibli-data.json", "utf-8", (err, data) => {
    if (err) throw err;
    const movies = JSON.parse(data);
    res.send(movies);
  });
});

app.listen(port, () => {
  console.log(`app listening on port ${port}!`);
});
