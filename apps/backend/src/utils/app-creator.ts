import express from "express";

export const createAppForModule = (routes: express.Router): express.Express => {
  const app = express();
  app.use(express.json());
  app.use(routes);
  return app;
};
