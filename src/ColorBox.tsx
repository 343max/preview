import React from "react"
import { View, Text } from "react-native"
import { FC } from "react"
import { PreviewProvider } from "./PreviewProvider"

interface ColorBoxProps {
  backgroundColor: string
  label: string
}

export const ColorBox: FC<ColorBoxProps> = ({ backgroundColor, label }) => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{ backgroundColor: backgroundColor, padding: 30, flex: 1 }}>
      <Text>{label}</Text>
    </View>
  )
}

export const ColorBoxPreview: PreviewProvider = () => {
  console.log("!!!!!!!!!!! ColorBoxPreview")
  return [
    <ColorBox backgroundColor="#f44" label="Red" />,
    <ColorBox backgroundColor="#fa4" label="Orange" />,
  ]
}
