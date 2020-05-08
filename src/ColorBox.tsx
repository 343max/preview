import React from "react"
import { View, Text } from "react-native"
import { FC } from "react"

interface ColorBoxProps {
  backgroundColor: string
  label: string
}

export const ColorBox: FC<ColorBoxProps> = ({ backgroundColor, label }) => {
  return (
    <View style={{ backgroundColor: backgroundColor, padding: 30, flex: 1 }}>
      <Text>{label}</Text>
    </View>
  )
}

import { PreviewProvider } from "./PreviewProvider"
export const ColorBoxPreview: PreviewProvider = () => [
  <ColorBox backgroundColor="#f44" label="Red" />,
  <ColorBox backgroundColor="#fa4" label="Orange" />,
]
