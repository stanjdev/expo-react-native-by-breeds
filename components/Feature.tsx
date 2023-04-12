import { View, Text, StyleSheet } from "react-native"
const globalStyles = require('../styles');
interface FeatureProps {
  feature: string
  score: number
}

export default function Feature({ feature, score }: FeatureProps) {
  return(
    <View style={styles.featureRow}>
      <Text style={styles.featureText}>{feature}:</Text>
      <Text style={styles.featureText}>{score}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  featureRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
    paddingVertical: 2,
    paddingHorizontal: 6,
  },
  featureText: {
    fontSize: 16
  }
})
