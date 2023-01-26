import { Handlers } from "$fresh/server.ts";
import { deleteOne, getOne, updateOne } from "../../../utils/todos.ts";

function jsonifyResponse(data: unknown) {
  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}

export const handler: Handlers = {
  async GET(_req, ctx) {
    console.log("params", ctx.params.id);
    const todo = await getOne(ctx.params.id);

    return jsonifyResponse(todo);
  },

  async PUT(req, ctx) {
    const updatedData = await req.json();

    const updateTodo = await updateOne(ctx.params.id, updatedData);
    return jsonifyResponse(updateTodo);
  },

  async DELETE(_req, ctx) {
    const deleted = await deleteOne(ctx.params.id);
    return jsonifyResponse(deleted);
  },
};
