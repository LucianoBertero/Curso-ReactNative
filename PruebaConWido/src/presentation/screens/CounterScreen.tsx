import {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import PrimaryButton from '../components/shared/PrimaryButton';
import {Button} from 'react-native-paper';

const CounterScreen = () => {
  const [count, setCount] = useState(10);
  return (
    <View style={style.container}>
      <Text style={style.title}>{count}</Text>

      {/* <PrimaryButton
        label="incrementar"
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}></PrimaryButton> */}

      <Button
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
        mode="contained">
        Incrementar
      </Button>
    </View>
  );
};

export default CounterScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    color: 'black',
    fontWeight: '300',
  },
  button: {
    backgroundColor: '#5856d6',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonPress: {
    backgroundColor: '#4746AB',
  },
});
