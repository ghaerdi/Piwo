import { Merlin } from "merlin";
import parse from "../utils/args/parser.ts";
import { validateArgs } from "../utils/args/validate.ts";
import { purple, yellow } from "../utils/color/colors.ts";
import type { Args } from "../types.ts";
import type { ArgResult, FlagResult } from "./types.ts";

const test = new Merlin();

test.assertEqual("version flag", {
  expect() {
    const short = parse(["-v"]);
    const complete = parse(["--version"]);
    return { short, complete };
  },
  toBe(): FlagResult {
    const result: ArgResult = { flags: { version: true } };
    return {
      short: result,
      complete: result,
    };
  },
});

test.assertEqual("version unexpected args", {
  expect() {
    const obj: Args = {
      flags: { version: true },
      url: "ajio.com",
      method: "GET",
    };
    return validateArgs(obj as Required<Args>);
  },
  toBe() {
    return {
      msg: `the flag ${purple("version")} doesn't need arguments`,
      exit: false,
      type: `${yellow("warn")}`,
    };
  },
});
