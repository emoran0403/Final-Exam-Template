import * as express from "express";
import baseRouter from "./routes/index";

const app = express();

app.use(express.static("public")); // send public directory to client
app.use(express.json()); // allows for req.body parsing
app.use(baseRouter); // collects and organizes our routes

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));

//! this is where routes start, at baseRouter
