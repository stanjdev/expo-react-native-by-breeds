import { StatusBar } from 'expo-status-bar';
import { ScrollView, SafeAreaView, FlatList, StyleSheet, Text, View } from 'react-native';
import { cats, dogs } from './breeds';
import AnimalBreed from './components/AnimalBreed';

export default function App() {
  return (
    <View style={styles.container}>

      <StatusBar style="auto" />

      <SafeAreaView>
        {/* <ScrollView>
          {cats.map((item, index) => {
            return <AnimalBreed key={index} animal={item} title={`${index} ${item.breed}`}/>
          })}
          {dogs.map((item, index) => {
            return <AnimalBreed key={index} animal={item} title={`${index} ${item.breed}`}/>
          })}
        </ScrollView> */}

        {/* Cats */}
        <FlatList
          data={cats}
          renderItem={({ item }) => {
            return <AnimalBreed animal={item} title={`${item.breed}`} />
        }}
          keyExtractor={(item) => item.breed}
        />

        {/* Dogs */}
        <FlatList
          data={dogs}
          renderItem={({ item }) => {
            return <AnimalBreed animal={item} title={`${item.breed}`} />
        }}
          keyExtractor={(item) => item.breed}
        />
      </SafeAreaView>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
