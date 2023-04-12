import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Feature from './Feature';
const globalStyles = require('../styles');

interface AnimalBreedProps {
  animal: any;
  title: string;
}

function AnimalBreed({ animal, title }: AnimalBreedProps) {
  const features = Object.keys(animal);

  const numericFeatures = features.filter((feature, idx, array) => (array.indexOf(feature) === idx) && feature !== 'breed');
  const len = numericFeatures.length;
  const fullScore = numericFeatures.map((feature) => animal[feature]).reduce((a, b) => a + b, 0);
  const average = len > 0 ? (fullScore / len).toFixed(1) : 0;

  return(
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <Text style={styles.breedName}>{title}</Text>
        <Text style={styles.breedName}>Avg: {average}</Text>
      </View>

      <View style={styles.featuresContainer}>
        {numericFeatures
          .map((feature, index) => <Feature key={`${index} ${feature}`} feature={feature} score={animal[feature]}/>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
  },
  featuresContainer: {
    marginBottom: 10,
    backgroundColor: '#26B5A1',
    borderRadius: 10,
    paddingVertical: 4,
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

export default AnimalBreed;
