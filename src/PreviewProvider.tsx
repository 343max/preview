import React from "react"

export interface PreviewProvider {
  (): React.ReactElement[] | React.ReactElement
}
