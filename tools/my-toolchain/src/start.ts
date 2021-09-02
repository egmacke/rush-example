#!/usr/bin/env node

import * as child_process from "child_process";
import * as colors from "colors";

console.log("Invoking my-toolchain...");

child_process.execSync("tsc", { stdio: "inherit" });

console.log(colors.green("Success!"));

//
//
