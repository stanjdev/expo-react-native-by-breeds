import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FeaturesBlock from "./FeaturesBlock";

interface AnimalCardProps {
  title: string,
  average: string | number,
  numericFeatures: string[],
  animal: any
}

export default function AnimalCard({ title, average, numericFeatures, animal }: AnimalCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <Text style={styles.breedName}>{title}</Text>
        <Text style={styles.breedName}>Avg: {average}</Text>
      </View>

      <FeaturesBlock numericFeatures={numericFeatures} animal={animal} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
  },
  titleRow: {
    display: 'flex',
		justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 4
  },
  breedName: {
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#DEC027',
  },
})
