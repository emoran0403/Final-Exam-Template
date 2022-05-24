// server.ts - will need to make this live
import * as express from "express";
import baseRouter from "./routes/index";

import { configurePassport } from "./server_utils/JWTStrategies";

const app = express();

configurePassport(app); // configures Passport for us

app.use(express.static("public")); // send public directory to client
app.use(express.json()); // allows for req.body parsing
app.use(baseRouter); // collects and organizes our routes

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));

//! this is where routes start, at baseRouter
