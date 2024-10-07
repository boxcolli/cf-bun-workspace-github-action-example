import { Hono } from 'hono'
import v1 from "./v1"

const app = new Hono<{ Bindings: Env }>()

app.get("/hello", (c) => {
  return c.text("Hello World")
})
app.route("/v1", v1)

export default {
  fetch: app.fetch,
}
