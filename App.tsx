import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import BreedsApp from './components/BreedsApp';
import DetailsScreen from './screens/DetailsScreen';

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Breeds"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#e1154f',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Breeds"
          component={BreedsApp}
          options={{
            title: "Breeds",
            headerStyle: {
              backgroundColor: '#f4511e'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 24
            }
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            title: 'Details'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

