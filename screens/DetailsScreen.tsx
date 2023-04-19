import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import AnimalCard from '../components/AnimalCard';

export default function DetailsScreen({route, navigation}: any) {
  const { title, average, numericFeatures, animal } = route.params;
  navigation.setOptions({title: `${title}, ${average}`})
  return (
    <View style={styles.container}>
      <ScrollView>
        <AnimalCard title={title} average={average} numericFeatures={numericFeatures} animal={animal} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D415A',
    paddingTop: 16,
  },
})
