import * as passport from "passport";
import * as JWTStrategy from "passport-jwt";
import * as LocalStrategy from "passport-local";
import bcrypt from "bcrypt";

interface User extends Express.User {
  id?: string;
  email?: string;
  password?: string;
}

passport.serializeUser((user: User) => {
  if (user.password) delete user.password;
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

//Logging in
passport.use(
  new LocalStrategy.Strategy(
    {
      usernameField: "email",
    },
    (email, pass, done) => {
      try {
        // get user from db
        const [user] = [{ id: "", email: "", password: "" }];
        if (bcrypt.compare(pass, user.password)) {
          delete user.password;
          done(null, user);
        }
      } catch (error) {
        done(error);
        done(null, false);
      }
    }
  )
);

passport.use(
  new JWTStrategy.Strategy(
    {
      jwtFromRequest: JWTStrategy.ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: "hunter2",
    },
    (payload, done) => {
      done(null, payload);
    }
  )
);
