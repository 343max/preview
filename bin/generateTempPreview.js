#!/usr/bin/env node

const argv = process.argv

var data

if (argv.length == 4) {
  // path / PreviewingFunction

  const path = argv[2]
  const call = argv[3]

  data = `import { ${call} } from "${path}"

export const preview = {
  generator: ${call},
  path: "${path}",
  generatorName: "${call}"
}`
} else if (argv.length == 2) {
  // no arguments, reset to app view

  data = "export const preview = undefined"
}

if (data !== undefined) {
  const fs = require("fs")
  fs.writeFileSync("Preview_Temp.js", data)
} else {
  console.error("incorrect usage!")
}
