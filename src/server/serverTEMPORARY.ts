import * as express from "express";
import * as passport from "passport";
import baseRouter from "./routes/index";

import "./server_utils/JWTStrategies.ts";

const app = express();

app.use(passport.initialize()); // initialize passport so that we can use its middleware

app.use(express.static("public")); // send public directory to client
app.use(express.json()); // allows for req.body parsing
app.use(baseRouter); // collects and organizes our routes

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));

//! this is where routes start, at baseRouter
