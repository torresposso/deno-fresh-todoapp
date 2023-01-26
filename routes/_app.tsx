import { Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/src/server/types.ts";

export default function AppLayout({ Component }: AppProps) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <title>Fresh Todo App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://cdn.twind.style" crossOrigin=""></script>
      </Head>
      <body class="bg-gray-800 text-white">
        <main class="container mx-auto">
          <Component />
        </main>
      </body>
    </html>
  );
}
