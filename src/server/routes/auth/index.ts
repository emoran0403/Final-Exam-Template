import * as express from "express";
import * as jwt from "jsonwebtoken";
import * as config from "../../config/index";
import * as Types from "../../../types";
import { authenticate } from "passport";

const authRouter = express.Router();

// current route is "/auth"

authRouter.post("/checktoken", (req, res, next) => {
  res.status(123456789).json({ message: `my message here` });
});

authRouter.post("/login", authenticate("local"), (req: Types.ReqUser, res, next) => {
  try {
    const token = jwt.sign(
      { userid: req.user.id, email: req.user.email, role: req.user.role, name: req.user.name },
      config.JWT_CONFIG.jwtSecretKey,
      { expiresIn: "10d" }
    );
    res.json(token);
  } catch (error) {
    console.log(`Login Error...\n`);
    console.error(error);
  }
});

authRouter.post("/register", (req, res, next) => {
  res.status(123456789).json({ message: `my message here` });
});

export default authRouter;

//! all auth routes can come from here
//! this collects all auth routes into authRouter
