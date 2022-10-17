import { Hono } from "hono";

const admin = new Hono();

admin.get("/", (c) =>
  c.json({
    hello: "ADMIN WOI",
  })
);

export default admin;
