import * as passport from "passport";
import { Request, Response, NextFunction } from "express";

interface IReqUser extends Request {
  id?: string;
  email?: string;
}

export const tokenCheck = (req: IReqUser, res: Response, next: NextFunction) => {
  passport.authenticate("jwt", { session: false }, (err, info, user) => {
    if (err || info || !user) {
      console.log({ err, info });
      return res.status(401).json({ message: "invalid credentials" });
    }
    next();
  })(req, res, next);
};

export const isAdmin = (req: IReqUser, res: Response, next: NextFunction) => {
  hasPermission(req, res, next, "admin");
};

const hasPermission = (req: IReqUser, res: Response, next: NextFunction, permission: string) => {
  passport.authenticate("jwt", { session: false }, (err, info, user) => {
    if (err || info || !user) {
      console.log({ err, info });
      return res.status(401).json({ message: "invalid credentials" });
    }

    if (user.role != permission) {
      return res.status(403).json({ message: "insufficient permissions" });
    }
    next();
  })(req, res, next);
};
