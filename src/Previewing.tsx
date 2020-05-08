import React, { FC } from "react"
import { SafeAreaView, ScrollView, View, Text } from "react-native"
import { PreviewProvider } from "./PreviewProvider"
// @ts-ignore: Might not exist
import { preview } from "../Preview_Temp"

interface PreviewDescription {
  generator: PreviewProvider
  generatorName: string
  path: string
}

interface PreviewContainerProps {
  preview: PreviewDescription
}

export const PreviewContainer: FC<PreviewContainerProps> = ({ preview }) => {
  const elements = (() => {
    if (typeof preview.generator !== "function") {
      return [
        <View style={{ backgroundColor: "#f00", padding: 20 }}>
          <Text style={{ color: "#fff", fontWeight: "bold" }}>
            {`${preview.generatorName} is not a function\nSource: ${preview.path}`}
          </Text>
        </View>,
      ]
    }
    const elements = preview.generator()
    if (elements instanceof Array) {
      return elements
    } else {
      return [elements]
    }
  })()
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        {elements.map((element, index) => (
          <View key={index}>{element}</View>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export const previewingRootComponent = (): FC<any> | undefined => {
  if (!preview) {
    return undefined
  } else {
    return () => <PreviewContainer preview={preview as PreviewDescription} />
  }
}
