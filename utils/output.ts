/**
 * Copyright (c) Crew Dev.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Output } from "../types.ts";
import colorizeData from "./colorizeData.ts"

function outputResponse(data: Output) {
	const { protocol, status, ok, headers, body  } = colorizeData(data);

	console.log(`${protocol} ${status}/${ok}\n${headers}\n${body}`);
}

export default outputResponse;