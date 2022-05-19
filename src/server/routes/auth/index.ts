import * as express from "express";

const authRouter = express.Router();

// router.get("/my/route/here", MIDDLEWARE, (req, res, next) => {
//   res.status(123456789).json({ message: `my message here` });
// });

export default authRouter;

//! all auth routes can come from here
//! this collects all auth routes into authRouter
