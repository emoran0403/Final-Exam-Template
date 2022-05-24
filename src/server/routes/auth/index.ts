import * as express from "express";
import * as Types from "../../../types";
import * as DB from "../../db/UserQueries";
import * as passport from "passport";
import { generateHash, generateToken } from "../../server_utils/Passwords";

const authRouter = express.Router();

// current route is "/auth"

// check if a token is valid
authRouter.get("/verify", passport.authenticate("jwt"), (req, res, next) => {
  res.status(200).json({ message: `Valid Token` });
});

// login an existing user
authRouter.post("/login", passport.authenticate("local"), (req: Types.ReqUser, res, next) => {
  try {
    const token = generateToken(req.user.id, req.user.email, req.user.role, req.user.name);
    res.json(token);
  } catch (error) {
    console.log(`Login Error...\n`);
    console.error(error);
  }
});

// register a new user and log them in
authRouter.post("/register", async (req, res, next) => {
  const newUser = req.body;
  try {
    newUser.password = generateHash(newUser.password);
    const result = await DB.default.insertNewUser(newUser);

    if (result.OkPacket.affectedRows) {
      const token = generateToken(result.OkPacket.insertId, newUser.email, newUser.role, newUser.name);
      res.json(token);
    } else {
      res.status(400).json({ message: "Duplicate email" });
    }
  } catch (error) {
    console.log(`Login Error...\n`);
    console.error(error);
  }
});

export default authRouter;
