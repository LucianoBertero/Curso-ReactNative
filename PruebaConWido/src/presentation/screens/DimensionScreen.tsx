import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';

const DimensionScreen = () => {
  const {width, height} = useWindowDimensions();
  return (
    <View>
      <View style={styles.container}>
        <View style={{...styles.purpleBox, width: width * 0.6}}></View>
      </View>

      <Text style={styles.title}>
        w: {width}, heigth; {height}
      </Text>
    </View>
  );
};

export default DimensionScreen;

const styles = StyleSheet.create({
  container: {
    width: 300,
    backgroundColor: 'red',
    height: 300,
  },
  purpleBox: {
    backgroundColor: '#5856d6',
    height: '50%',
    width: '50%',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
});
