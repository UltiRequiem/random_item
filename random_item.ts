import { Command } from "https://deno.land/x/cliffy@v0.25.6/command/mod.ts";
import { randomItem } from "./mod.ts";

const root = new Command()
  .name("random_item")
  .version("0.1.0")
  .description("Get a random item from a list")
  .arguments("<items....:string>");

const { args } = await root.parse(Deno.args);

const selectedItem = randomItem(args[0]);

console.log(selectedItem);
