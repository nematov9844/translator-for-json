#!/usr/bin/env node
import { Command } from "commander";
import fs from "fs";
import { walk } from "./translator/walk.js";

const program = new Command();

program
  .name("jtr")
  .description("Translate JSON values only")
  .version("1.0.0")
  .argument("<input>", "Input JSON file")
  .argument("[output]", "Output JSON file")
  .option("-t, --to <lang>", "Target language", "uz")
  .option("--force", "Translate all values")
  .option("--overwrite", "Overwrite input file")
  .option("--backup", "Create backup before overwrite")
  .action(async (input, output, options) => {
    if (!fs.existsSync(input)) {
      console.error(`Input file not found: ${input}`);
      process.exit(1);
    }

    if (!output && !options.overwrite) {
      console.error("Error: output file or --overwrite is required.");
      process.exit(1);
    }

    const raw = fs.readFileSync(input, "utf-8");
    const data = JSON.parse(raw);

    const translated = await walk(data, options.to, options.force);
    const finalJson = JSON.stringify(translated, null, 2);

    if (options.overwrite) {
      if (options.backup) {
        fs.copyFileSync(input, `${input}.bak`);
        console.log(`Backup created: ${input}.bak`);
      }

      fs.writeFileSync(input, finalJson);
      console.log(`Overwritten: ${input}`);
    } else {
      fs.writeFileSync(output, finalJson);
      console.log(`Saved to: ${output}`);
    }

    console.log("Done ✅");
  });

program.parse();