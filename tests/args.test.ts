import { Merlin } from "merlin";
import parse from "../utils/args/parser.ts";
import { Args } from "../types.ts";

const test = new Merlin();

type ArgResult = void | Args;
type FlagResult = { short: ArgResult; complete: ArgResult };

//#region flags

test.assertEqual("version flag", {
  expect() {
    const short = parse(["-v"]);
    const complete = parse(["--version"]);
    return { short, complete };
  },
  toBe(): FlagResult {
    return {
      short: {
        flags: { version: true },
      },
      complete: {
        flags: { version: true },
      },
    };
  },
});

test.assertEqual("help flag", {
  expect() {
    const short = parse(["-h"]);
    const complete = parse(["--help"]);
    return { short, complete };
  },
  toBe(): FlagResult {
    return {
      short: {
        flags: { help: true },
      },
      complete: {
        flags: { help: true },
      },
    };
  },
});

//#endregion

test.assertEqual("GET Protocol to api.github.com", {
  expect() {
    return parse(["api.github.com"]);
  },
  toBe(): ArgResult {
    return {
      url: "api.github.com",
      method: "GET",
      flags: {},
      headers: { "Content-Type": "application/json" },
    };
  },
});
