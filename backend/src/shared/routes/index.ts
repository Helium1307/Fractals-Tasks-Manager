import { Router } from "express";

const routes = Router();

routes.use("/", (req, res) => {
  res.send("SADASD");
});

export default routes;
