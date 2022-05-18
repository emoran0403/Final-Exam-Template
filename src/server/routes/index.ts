// This is where we collect the branches /api and /auth
import * as express from "express";

const router = express.Router();

router.get("/api/hello", (req, res, next) => {
  res.json("World");
});

export default router;
