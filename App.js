import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tab from './src/components/Tab/Tab'

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex:1}}>
        <Tab/>
      </SafeAreaView>
    </NavigationContainer>
  );
}


