import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import { NavigationContainer } from '@react-navigation/native'
import Login from './src/screens/Login';

export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} options={{headerShown:false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
