import { Handlers } from "$fresh/server.ts";
import { createOne, getAll } from "../../../utils/todos.ts";

function jsonifyResponse(data: unknown) {
  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}

export const handler: Handlers = {
  async GET() {
    const todos = await getAll();

    return jsonifyResponse(todos);
  },

  async POST(req) {
    const { text } = await req.json();
    const ok = await createOne(text);
    return jsonifyResponse(ok);
  },
};
