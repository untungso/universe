import { serve } from "@honojs/node-server";
import { Hono } from "hono";

import admin from "@instead/micros-admin";
import auth from "@instead/micros-auth";

const app = new Hono();

app.route("/admin", admin);
app.route("/auth", auth);

serve({
  fetch: app.fetch,
  port: 8080,
});
