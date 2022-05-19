import * as express from "express";

const authRouter = express.Router();

// current route is "/auth"

authRouter.post("/checktoken", (req, res, next) => {
  res.status(123456789).json({ message: `my message here` });
});

authRouter.post("/login", (req, res, next) => {
  res.status(123456789).json({ message: `my message here` });
});

authRouter.post("/register", (req, res, next) => {
  res.status(123456789).json({ message: `my message here` });
});

export default authRouter;

//! all auth routes can come from here
//! this collects all auth routes into authRouter
