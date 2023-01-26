import { Handlers } from "$fresh/server.ts";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "@/src/trpc/server.ts";
import { createContext } from "@/src/trpc/fetch-context.ts";

function withFetchRequestHandler(req: Request) {
  return fetchRequestHandler({
    endpoint: "/trpc",
    router: appRouter,
    req,
    createContext,
  });
}

export const handler: Handlers = {
  async GET(req) {
    return await withFetchRequestHandler(req);
  },

  POST(req) {
    return withFetchRequestHandler(req);
  },
};
