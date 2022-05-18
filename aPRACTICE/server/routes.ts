import * as express from "express";
import * as passport from "passport";
import { tokenCheck } from "../Middleware/JWTChecks";

const router = express.Router();

router.get("/api/hello", (req, res, next) => {
  res.json("World");
});

router.get("/protected/route/here", passport.authenticate("local"), (req, res, next) => {
  res.json("your res here");
});

router.get("/protected/route/here", tokenCheck, (req, res, next) => {
  res.json("your res here");
});

export default router;
