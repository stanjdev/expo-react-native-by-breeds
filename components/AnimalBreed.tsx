import React from 'react';
import { TouchableOpacity } from 'react-native';
import AnimalCard from './AnimalCard';

interface AnimalBreedProps {
  animal: any;
  title: string;
  navigation: any;
}

export default function AnimalBreed({ animal, title, navigation }: AnimalBreedProps ) {
  const features = Object.keys(animal);

  const numericFeatures = features.filter((feature, idx, array) => (array.indexOf(feature) === idx) && feature !== 'breed');
  const len = numericFeatures.length;
  const fullScore = numericFeatures.map((feature) => animal[feature]).reduce((a, b) => a + b, 0);
  const average = len > 0 ? (fullScore / len).toFixed(1) : 0;

  return(
    <TouchableOpacity
      onPress={() => navigation.navigate('Details', { title, average, numericFeatures, animal })}
    >
      <AnimalCard title={title} average={average} numericFeatures={numericFeatures} animal={animal} />
    </TouchableOpacity>
  );
}
