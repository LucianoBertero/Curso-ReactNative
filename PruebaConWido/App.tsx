import {SafeAreaView, Dimensions, StyleSheet, Text, View} from 'react-native';
import {HelloWorldScreen} from './src/presentation/screens/HelloWorldScreen';
import CounterScreen from './src/presentation/screens/CounterScreen';
import {PaperProvider} from 'react-native-paper';
import CounterM3Screen from './src/presentation/screens/CounterScreenM3Screen';
import IonIcon from 'react-native-vector-icons/Ionicons';
import BoxObjectModelScreen from './src/presentation/screens/BoxObjectModelScreen';
import DimensionScreen from './src/presentation/screens/DimensionScreen';
import PositionScreen from './src/presentation/screens/PositionScreen';
import FlexScreen from './src/presentation/screens/FlexScreen';
import FlexDirectionScreen from './src/presentation/screens/FlexDirectionScreen';
import HomeWorkScreen from './src/presentation/screens/HomeWorkScreen';
function App() {
  return (
    <PaperProvider
      settings={{
        icon: props => <IonIcon {...props}></IonIcon>,
      }}>
      <SafeAreaView style={{flex: 1}}>
        {/* <CounterM3Screen></CounterM3Screen>
        <BoxObjectModelScreen></BoxObjectModelScreen> */}
        {/* <DimensionScreen></DimensionScreen> */}
        {/* <PositionScreen></PositionScreen> */}
        {/* <FlexScreen></FlexScreen> */}
        {/* <FlexDirectionScreen></FlexDirectionScreen> */}
        <HomeWorkScreen></HomeWorkScreen>
      </SafeAreaView>
    </PaperProvider>
  );
}

export default App;
