import { Hono } from "hono";
import { createHub } from "honohub";

import hubConfig from "../hub.config";

const app = new Hono().route("/", createHub(hubConfig));

const port = process.env.HONOHUB_API_PORT || 3000;
export default {
	port,
	fetch: app.fetch,
};
