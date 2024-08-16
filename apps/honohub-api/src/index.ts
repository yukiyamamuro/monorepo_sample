import { Hono } from "hono";
import { cors } from "hono/cors";

import { createHub } from "honohub";

import hubConfig from "../hub.config";

const app = new Hono().use(cors()).route("/", createHub(hubConfig));

const port = process.env.HONOHUB_API_PORT || 3000;
export default {
	port,
	fetch: app.fetch,
};
