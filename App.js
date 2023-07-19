import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './pages/Welcome';
import Register from './pages/Register';
import Info from './pages/Info';

function App() {
  const Stack = createStackNavigator();
  return (
    
      <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false}}>
              <Stack.Screen name= "WelcomeScreen" component={Welcome}/>
              <Stack.Screen name= "RegisterScreen" component={Register}/>
              <Stack.Screen name= "InfoScreen" component={Info}/>
          </Stack.Navigator>
      </NavigationContainer>
    
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

