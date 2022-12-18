import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StudyUK from './src/screens/StudyUK';
import StudyUSA from './src/screens/StudyUSA';
import StudyCanada from './src/screens/StudyCanada';
import ApplyNow from './src/screens/ApplyNow';
import { DrawerNavigator } from './src/navigation/drawerNavigation';





const Stack = createNativeStackNavigator();

export default function App({ navigation }) {


  // loading font
  // ..............................................................................
  const [loaded] = useFonts({
    'antonio-bold': require('./assets/fonts/Antonio/Antonio-Bold.ttf'),
    'spartan-regular': require('./assets/fonts/League_Spartan/LeagueSpartan-Medium.ttf'),
    'spartan-light': require('./assets/fonts/League_Spartan/LeagueSpartan-Light.ttf')
  })
  if (!loaded) {
    return null;
  }





  // navigation setup
  // ........................................................................
  return (

    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerTitleAlign: 'center', headerTintColor: 'black'
      }}>

        {/* loading drawer navigation */}
        <Stack.Screen name="Home" component={DrawerNavigator}
          options={{
            headerShown: false,
            headerStyle: styles.header
          }}
        />

        <Stack.Screen name="StudyUK" component={StudyUK} />
        <Stack.Screen name="StudyUSA" component={StudyUSA} />
        <Stack.Screen name="StudyCanada" component={StudyCanada} />
        <Stack.Screen name="ApplyNow" component={ApplyNow} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}





// stylesheet
// ...............................................................

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  },
  header: {
    backgroundColor: "#007089",
  }
})

