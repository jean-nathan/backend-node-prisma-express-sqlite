import express, { json } from "express";
import { router } from "./router";
const app = express();

app.use(express.json());
app.use(router);

app.listen(8080, () => {
  console.log("App Hello API running at 8080!");
});
