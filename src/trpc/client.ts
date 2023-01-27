import { createTRPCProxyClient, httpBatchLink, loggerLink } from "@trpc/client";
import { IS_BROWSER } from "$fresh/runtime.ts";

import type { AppRouter } from "./server.ts";

/**
 * This guard check for IS_BROWSER is necessary,
 * since `location` is not defined in global scope on server and crashes on deno deploy.
 */

let host;

if (IS_BROWSER) {
  console.log("Origin: ", location?.origin);
  host = location?.origin;
}

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    loggerLink(),
    httpBatchLink({
      url: `${host}/trpc`,
    }),
  ],
});
