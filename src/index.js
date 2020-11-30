import express from "express";
import "dotenv/config";
import "regenerator-runtime/runtime.js";
import cors from "cors";
import { apolloServer } from "./Apollo";
import cookieParser from "cookie-parser";
import { refreshToken } from "./controller/Auth/refreshToken";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use("/refresh_token", cookieParser());
app.post("/refresh_token", refreshToken);

app.get("/", (req, res) => {
  res.send("alo");
});

const port = process.env.PORT || 4000;

apolloServer.applyMiddleware({ app, cors: false });

app.listen(port, () => {
  console.log("API RODANDO COM SUCESSO");
});
