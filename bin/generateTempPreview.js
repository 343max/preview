#!/usr/bin/env node

const fs = require("fs")

const argv = process.argv

function error(message) {
  console.error(message)
  process.exit(1)
}

var data
if (argv.length == 3) {
  const path = argv[2]

  const source = fs.readFileSync(path, { encoding: "utf-8" })

  const previewProvider = source.match(
    /^export const ([A-Za-z_0-9]+)\s*:\s*PreviewProvider/m
  )
  if (!previewProvider) {
    error("could not find a PreviewProvider")
  }

  const call = previewProvider[1]

  data = `import { ${call} } from "./${path}"

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
  fs.writeFileSync("Preview_Temp.js", data)
} else {
  error("incorrect usage!")
}
