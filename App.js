import React from 'react';
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MessageScreen from './screens/MessageScreen'; // Assurez-vous que le chemin est correct
import MessageContainer from './components/layout/MessageContainer';
import Header from './components/layout/Header'; 

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Header />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false, // Masquer l'en-tête de navigation par défaut
          }}
        >
          <Stack.Screen name="Home" component={MessageScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <MessageContainer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});