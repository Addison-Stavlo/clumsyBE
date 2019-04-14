const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const server = express();

const db = require("../data/dbConfig");

server.use(helmet());
server.use(express.json());
server.use(morgan("short"));
server.use(cors());

server.get("/", (req, res) => {
  res.status(200).send("Hiya...");
});

server.get("/arcadeScores/clumsyScore", async (req, res) => {
  try {
    let scores = await db("clumsy_scores").orderBy("score");
    res.status(200).json(scores);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "error!", error: err });
  }
});

server.post("/arcadeScores/clumsyScore", async (req, res) => {
  try {
    if (req.body.name) {
      let name = req.body.name;
      if (req.body.score) {
        let score = req.body.score;
        let newScore = { name, score };
        await db("clumsy_scores").insert(newScore);
        let scores = await db("clumsy_scores").orderBy("score");
        res.status(200).json(scores);
      }
    } else {
      res.status(400).json({ message: "must include both name and score" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "error!", error: err });
  }
});

module.exports = server;
