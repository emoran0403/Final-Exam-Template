// This is the seed of our Router tree
import * as express from "express";
import apiRouter from "../server/routes/index";
import * as passport from "passport";

const app = express();

app.use(express.static("public"));
app.use(apiRouter);
app.use(express.json());

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
