/**
 * Copyright (c) Crew Dev.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import outputResponse from "./utils/output.ts";
import customFetch from "./utils/customFetch.ts";
import { purple, yellow } from "./utils/colors.ts";
import info from "./info.ts";

export async function getCommand(url: string) {
  outputResponse(await customFetch(url, "GET"));
}

export async function postCommand(url: string, body?: BodyInit) {
  outputResponse(await customFetch(url, "POST", body));
}

export async function putCommand(url: string, body?: BodyInit) {
  outputResponse(await customFetch(url, "PUT", body));
}

export async function deleteCommand(url: string, body?: BodyInit) {
  outputResponse(await customFetch(url, "DELETE", body));
}

export async function patchCommnand(url: string, body?: BodyInit) {
  outputResponse(await customFetch(url, "PATCH", body));
}

export const versionCommand = `${purple(info.name)}: ${yellow(info.version)}`;

export const helpCommand =
`${purple("USAGE:")}
  ${info.name.toLowerCase()} ${yellow("[OPTIONS] [METHOD] [URL] [BODY]")}

${purple("OPTIONS:")}
  ${yellow("--help, -h")}      show help info
  ${yellow("--version, -v")}   show version

${purple("METHOD:")}
  ${yellow("GET")}             default method when no method is passed
  ${yellow("POST")}
  ${yellow("PATCH")}
  ${yellow("PUT")}
  ${yellow("DELETE")}

${purple("URL:")}
  You can no specify the protocol.

${purple("BODY:")}
  piwo can only send a json body

${purple("EXAMPLE:")}
  piwo api.github.com`