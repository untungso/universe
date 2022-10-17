import { Hono } from "hono";

const auth = new Hono();

auth.get("/", (c) =>
  c.json({
    hello: "AUTH WOI",
  })
);

export default auth;
