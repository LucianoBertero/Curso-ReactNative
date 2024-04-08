import {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

interface Props {
  label: string;
  onPress?: () => void;
  onLongPress?: () => void;
}

const PrimaryButton = ({label, onPress, onLongPress}: Props) => {
  const [counter, setCounter] = useState(10);
  return (
    <View>
      <Pressable
        style={({pressed}) => [style.button, pressed && style.buttonPress]}
        onLongPress={() => onLongPress && onLongPress()}
        onPress={() => onPress && onPress()}>
        <Text style={{color: 'white'}}>{label}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;
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
