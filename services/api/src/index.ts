import { serve } from "@honojs/node-server";
import { Hono } from "hono";

import admin from "@instead/micros-admin";

const app = new Hono();

app.route("/admin", admin);

serve({
  fetch: app.fetch,
  port: 8080,
});
