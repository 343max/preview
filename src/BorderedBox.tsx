import React, { FC } from "react"
import { View, Text } from "react-native"
import { PreviewProvider } from "./PreviewProvider"

interface BorderBoxProps {
  borderColor: string
  label: string
}

export const BorderBox: FC<BorderBoxProps> = ({ borderColor, label }) => (
  <View style={{ borderColor, borderWidth: 10, padding: 20 }}>
    <Text>{label}</Text>
  </View>
)

export const BorderedBoxPreview: PreviewProvider = () => [
  <BorderBox borderColor="#ff0" label="yellow" />,
  <BorderBox borderColor="#0f0" label="green" />,
]
