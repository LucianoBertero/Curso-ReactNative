import {StyleSheet, Text, View} from 'react-native';

const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>BoxObjectScreen</Text> */}

      <View style={styles.purpleBox}></View>
      <View style={styles.purpleBox}></View>
    </View>
  );
};

export default BoxObjectModelScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  title: {
    fontSize: 30,
    paddingHorizontal: 30,
    borderWidth: 10,
    paddingVertical: 10,
  },
  purpleBox: {
    height: 30,
    marginHorizontal: 20,
    marginVertical: 50,
    backgroundColor: 'purple',
  },
});
