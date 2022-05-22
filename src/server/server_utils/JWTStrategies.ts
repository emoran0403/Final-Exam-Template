import * as passport from "passport";
import * as JWTStrategy from "passport-jwt";
import * as PassportLocal from "passport-local";
import * as bcrypt from "bcrypt";
import * as DB from "../db/index";

interface User extends Express.User {
  id?: string;
  email?: string;
  password?: string;
}

passport.serializeUser((user: User, done) => {
  if (user.password) delete user.password;
  done(null, user);
});
passport.deserializeUser((user: User, done) => {
  done(null, user);
});

// Logging in
passport.use(
  new PassportLocal.Strategy(
    {
      usernameField: "email",
    },
    async (email, password, done) => {
      try {
        const [userFound] = await DB.Users.getSingleUserAUTH(email);
        if (userFound && bcrypt.compare(password, userFound.password)) {
          delete userFound.password;
          done(null, userFound);
        } else {
          done(null, false);
        }
      } catch (error) {
        done(error);
      }
    }
  )
);

// Logging in
// passport.use(
//   new LocalStrategy.Strategy(
//     {
//       usernameField: "email",
//     },
//     (email, pass, done) => {
//       try {
//         // get user from db
//         const [user] = [{ id: "", email: "", password: "" }];
//         if (bcrypt.compare(pass, user.password)) {
//           delete user.password;
//           done(null, user);
//         }
//       } catch (error) {
//         done(error);
//         done(null, false);
//       }
//     }
//   )
// );

// Check token
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
