#!/bin/bash

PREVIEW_JS="Preview_Temp.js"

if [ "$#" -eq "0" ]; then
  echo "export const preview = undefined" > $PREVIEW_JS
  exit
fi

if [ "$#" -eq "2" ]; then
  cat > $PREVIEW_JS <<- EOJS
import { $2 } from "$1"

export const preview = {
  generator: $2,
  path: "$1",
  generatorName: "$2"
}
EOJS
  exit
fi

echo "no arguments: show app, [src] [PreviewingFunction]: preview"
