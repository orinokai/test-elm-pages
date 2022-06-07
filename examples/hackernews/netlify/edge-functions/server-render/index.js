import { createRequire } from "https://deno.land/std@0.130.0/node/module.ts";

export default async function render(request, context) {
  return new Response("Hello again!");
}
