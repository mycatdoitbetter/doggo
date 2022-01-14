import * as React from 'react';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'react-native-magnus';

import { 
  useFonts, 
  Montserrat_400Regular as MontserratRegular,
  Montserrat_500Medium as MontserratMedium,
  Montserrat_600SemiBold as MontserratSemiBold,
  Montserrat_700Bold as MontserratBold,
} from '@expo-google-fonts/montserrat';

import { Routes } from './src/routes';


const App = () => {

  let [fontsLoaded] = useFonts({
    MontserratRegular,
    MontserratMedium,
    MontserratSemiBold,
    MontserratBold
  });

  if (!fontsLoaded)  return <AppLoading />;

  return (
    <ThemeProvider>
      <StatusBar backgroundColor='auto'/>
      <Routes />
    </ThemeProvider>
  );
}

export default App;