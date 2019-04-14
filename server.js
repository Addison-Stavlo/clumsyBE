const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const server = express();

const db = require("./data/dbConfig");

server.use(cors());
server.use(helmet());
server.use(express.json());
server.use(morgan("short"));

server.get("/arcadeScores/clumsyScore", async (req, res) => {
  try {
    let scores = await db("clumsyScores").orderBy("score");
    res.status(200).json(scores);
  } catch (err) {
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
        await db("clumsyScores").insert(newScore);
        let scores = await db("clumsyScores").orderBy("scores");
        res.status(200).json(scores);
      }
    } else {
      res.status(400).json({ message: "must include both name and score" });
    }
  } catch (err) {
    res.status(500).json({ message: "error!", error: err });
  }
});

const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`Server running on port: ${port}`));
