#!/usr/bin/env node
import { Command } from "commander";
import fs from "fs";
import { walk } from "./translator/walk.js";

const program = new Command();

program
  .name("jtr")
  .argument("<input>")
  .argument("<output>")
  .option("--force", "Translate all values")
  .option("-t, --to <lang>", "Target language", "uz")
  .action(async (input, output, options) => {
    const raw = fs.readFileSync(input, "utf-8");
    const data = JSON.parse(raw);

    const translated = await walk(data, options.to, options.force);

    fs.writeFileSync(output, JSON.stringify(translated, null, 2));

    console.log("Done ✅");
  });

program.parse();