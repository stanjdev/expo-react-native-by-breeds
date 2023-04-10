import { View, Text, StyleSheet } from "react-native"

interface FeatureProps {
  feature: string
  score: number
}

export default function Feature({ feature, score }: FeatureProps) {
  return(
    <View style={styles.featureRow}>
      <Text>{feature}:</Text>
      <Text>{score}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  featureRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'orange',
    marginBottom: 2,
    // width: '100%',
  }
})
