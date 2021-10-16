import { listenAndServe } from "https://deno.land/std@0.111.0/http/server.ts";

console.log("http://localhost:8000/");
listenAndServe(
  ":8000",
  (req) =>
    new Response(
      "Who dare disturb my slumber??? Cursed mortal you will regret your insolence!\n"
    )
);
