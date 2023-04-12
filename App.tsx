import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import {
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  SafeAreaView,
  FlatList,
  VirtualizedList,
  StyleSheet,
  Text,
  View,
  Switch
} from 'react-native';
import { cats, dogs } from './breeds';
import AnimalBreed from './components/AnimalBreed';
const globalStyles = require('./styles')

const CATS = 'cats'
const DOGS = 'dogs'

export default function App() {
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState<any[]>();
  const [selectedAnimal, setSelectedAnimal] = useState(CATS);
  const [switchEnabled, setSwitchEnabled] = useState(false);

  useEffect(() => {
    let animalsSet = selectedAnimal === CATS ? cats : dogs;
    const filtered = animalsSet.filter((animal) => animal.breed.toLowerCase().includes(search.toLowerCase()))
    setFilteredData(filtered)
  }, [search, selectedAnimal])

  useEffect(() => {
    setSelectedAnimal(() => switchEnabled ? DOGS : CATS)
  }, [switchEnabled])

  const getItem = (_data: unknown, index: number): any => filteredData;

  const getItemCount = (_data: unknown) => 50;

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView>
        <KeyboardAvoidingView
          style={styles.keyboardView}
          behavior={Platform.OS === 'ios' ? "padding" : "height"}
        >
          <TextInput
            style={styles.searchInput}
            placeholder='Search'
            value={search}
            // onChangeText={(newText) => setSearch(newText)}
            onChangeText={setSearch} // same exact effect
          />
          <View style={styles.switchToggle}>
            <Text style={globalStyles.textColor}>Cats</Text>
            <Switch
              value={switchEnabled}
              onValueChange={() => setSwitchEnabled((state) => !state)}
              trackColor={{false: "#0D415A", true: '#E04A31'}}
              thumbColor={switchEnabled ? '#F7EEA7' : '#f4f3f4'}
            />
            <Text style={globalStyles.textColor}>Dogs</Text>
          </View>
        </KeyboardAvoidingView>

        <Text style={{color: '#E04A31', textAlign: 'right', paddingHorizontal: 20, fontWeight: 'bold', fontSize: 20}}>{switchEnabled ? 'Dogs' : 'Cats'}</Text>
        {/* <VirtualizedList
          data={filteredData}
          initialNumToRender={4}
          renderItem={({ item }) => {
            return <AnimalBreed animal={item} title={`${item.breed}`} />
          }}
          keyExtractor={(item) => item.breed}
          getItemCount={getItemCount}
          getItem={getItem}
        /> */}

        {/* <ScrollView>
          {filteredData?.map((item, index) => {
            return <AnimalBreed animal={item} title={`${item.breed}`} />
          })}
        </ScrollView> */}

        <FlatList
          style={{marginBottom: 50, paddingBottom: 100}}
          data={filteredData}
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
    backgroundColor: '#0D415A',
    justifyContent: 'center',
  },
  searchInput: {
    backgroundColor: '#F7EEA7',
    borderRadius: 10,
    padding: 10,
    flex: 1.5,
    fontSize: 20,
  },
  keyboardView: {
    marginTop: 100,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  switchToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 1,
  },
});
