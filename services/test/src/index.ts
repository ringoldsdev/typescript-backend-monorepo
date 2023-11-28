process.env.NODE_ENV === "production" && require("module-alias/register");

import { outputMessage } from "./nested";

// eslint-disable-next-line no-console
console.log(outputMessage());
