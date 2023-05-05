import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import Body from './src/components/Body';
import Footer from './src/components/Footer';

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </View>
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
