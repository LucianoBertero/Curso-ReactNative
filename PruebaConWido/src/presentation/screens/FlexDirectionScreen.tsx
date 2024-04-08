import {ScrollView, StyleSheet, Text, View} from 'react-native';

const FlexDirectionScreen = () => {
  return (
    <View style={style.container}>
      <View style={[style.box, style.box1]}></View>
      <View style={[style.box, style.box2]}></View>
      <View style={[style.box, style.box3]}></View>
      <View style={[style.box, style.box1]}></View>
      <View style={[style.box, style.box2]}></View>
      <View style={[style.box, style.box3]}></View>
      <View style={[style.box, style.box1]}></View>
      <View style={[style.box, style.box2]}></View>
      <View style={[style.box, style.box3]}></View>
      <View style={[style.box, style.box1]}></View>
      <View style={[style.box, style.box2]}></View>
      <View style={[style.box, style.box3]}></View>
      <View style={[style.box, style.box1]}></View>
      <View style={[style.box, style.box2]}></View>
      <View style={[style.box, style.box3]}></View>
      <View style={[style.box, style.box1]}></View>
      <View style={[style.box, style.box2]}></View>
      <View style={[style.box, style.box3]}></View>
      <View style={[style.box, style.box1]}></View>
      <View style={[style.box, style.box2]}></View>
      <View style={[style.box, style.box3]}></View>
      <View style={[style.box, style.box1]}></View>
      <View style={[style.box, style.box2]}></View>
      <View style={[style.box, style.box3]}></View>
      <View style={[style.box, style.box1]}></View>
      <View style={[style.box, style.box2]}></View>
      <View style={[style.box, style.box3]}></View>
      <View style={[style.box, style.box1]}></View>
      <View style={[style.box, style.box2]}></View>
      <View style={[style.box, style.box3]}></View>
      <View style={[style.box, style.box1]}></View>
      <View style={[style.box, style.box2]}></View>
      <View style={[style.box, style.box3]}></View>
      <View style={[style.box, style.box1]}></View>
      <View style={[style.box, style.box2]}></View>
      <View style={[style.box, style.box3]}></View>
      <View style={[style.box, style.box1]}></View>
      <View style={[style.box, style.box2]}></View>
      <View style={[style.box, style.box3]}></View>
      <View style={[style.box, style.box1]}></View>
      <View style={[style.box, style.box2]}></View>
      <View style={[style.box, style.box3]}></View>
      <View style={[style.box, style.box1]}></View>
      <View style={[style.box, style.box2]}></View>
      <View style={[style.box, style.box3]}></View>
      <View style={[style.box, style.box1]}></View>
      <View style={[style.box, style.box2]}></View>
      <View style={[style.box, style.box3]}></View>
      <View style={[style.box, style.box1]}></View>
      <View style={[style.box, style.box2]}></View>
      <View style={[style.box, style.box3]}></View>
      <View style={[style.box, style.box1]}></View>
      <View style={[style.box, style.box2]}></View>
      <View style={[style.box, style.box3]}></View>
      <View style={[style.box, style.box1]}></View>
      <View style={[style.box, style.box2]}></View>
      <View style={[style.box, style.box3]}></View>
      <View style={[style.box, style.box1]}></View>
      <View style={[style.box, style.box2]}></View>
      <View style={[style.box, style.box3]}></View>
      <View style={[style.box, style.box1]}></View>
      <View style={[style.box, style.box2]}></View>
      <View style={[style.box, style.box3]}></View>
      <View style={[style.box, style.box1]}></View>
      <View style={[style.box, style.box2]}></View>
      <View style={[style.box, style.box3]}></View>
      <View style={[style.box, style.box1]}></View>
      <View style={[style.box, style.box2]}></View>
      <View style={[style.box, style.box3]}></View>
      <View style={[style.box, style.box1]}></View>
      <View style={[style.box, style.box2]}></View>
      <View style={[style.box, style.box3]}></View>
    </View>
  );
};

export default FlexDirectionScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'stretch',

    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box: {
    // flex: 1,
    width: 100,
    height: 100,
  },
  box1: {
    backgroundColor: '#5856d6',
  },
  box2: {
    backgroundColor: '#4240a2',
  },
  box3: {
    backgroundColor: '#2e2d71',
  },
});
