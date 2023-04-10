import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Feature from './Feature';

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
        <Text>Avg: {average}</Text>
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
    // marginLeft: 10,
    marginBottom: 10,
  },
  titleRow: {
    display: 'flex',
		justifyContent: 'space-between',
    flexDirection: 'row',
  },
  breedName: {
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: 16,
    color: 'darkred',
  },
})

export default AnimalBreed;
