import { View, StyleSheet } from "react-native"
import Feature from "./Feature"

interface FeaturesProps {
  numericFeatures: string[],
  animal: any,
}

export default function FeaturesBlock({numericFeatures, animal}: FeaturesProps) {
  return (
    <View style={styles.featuresContainer}>
      {numericFeatures
        .map((feature: string, index: number) => <Feature key={`${index} ${feature}`} feature={feature} score={animal[feature]}/>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  featuresContainer: {
    marginBottom: 10,
    backgroundColor: '#26B5A1',
    borderRadius: 10,
    paddingVertical: 4,
  },
})
