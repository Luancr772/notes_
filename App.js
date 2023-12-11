import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import Home from './Pages/Home';
import { NavigationContainer} from '@react-navigation/native';
import NavigationAddNote from './Navigator/NavigationAddNote';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Home/>
      <NavigationContainer>
        <NavigationAddNote/>
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
