import {Pressable, Text, View} from 'react-native';
import {colors, styles} from '../theme/app-theme';
import CalculatorBotton from '../components/CalculatorBotton';
import {useCalculator} from '../hooks/useCalculator';

const CalculatorScreen = () => {
  const {
    number,
    buildNumber,
    toggleSign,
    clean,
    deleteOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
    divideOperation,
    calculateResult,
    formula,
    prevNumber,
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      <View style={{paddingHorizontal: 30, paddingBottom: 20}}>
        <Text adjustsFontSizeToFit numberOfLines={1} style={styles.mainResult}>
          {formula}
        </Text>
        <Text style={styles.subResult}>
          {prevNumber === '0' ? '' : prevNumber}
        </Text>
      </View>

      <View style={styles.row}>
        <CalculatorBotton
          onPress={() => clean()}
          blackText={true}
          color={colors.lightGray}
          label="C"></CalculatorBotton>
        <CalculatorBotton
          onPress={() => toggleSign()}
          blackText={true}
          color={colors.lightGray}
          label="+/-"></CalculatorBotton>
        <CalculatorBotton
          onPress={() => deleteOperation()}
          blackText={true}
          color={colors.lightGray}
          label="del"></CalculatorBotton>
        <CalculatorBotton
          onPress={() => divideOperation()}
          label="/"
          color={colors.orange}></CalculatorBotton>
      </View>
      <View style={styles.row}>
        <CalculatorBotton
          onPress={() => buildNumber('7')}
          color={colors.darkGray}
          label="7"></CalculatorBotton>
        <CalculatorBotton
          onPress={() => buildNumber('8')}
          color={colors.darkGray}
          label="8"></CalculatorBotton>
        <CalculatorBotton
          onPress={() => buildNumber('9')}
          color={colors.darkGray}
          label="9"></CalculatorBotton>
        <CalculatorBotton
          label="x"
          onPress={() => multiplyOperation()}
          color={colors.orange}></CalculatorBotton>
      </View>
      <View style={styles.row}>
        <CalculatorBotton
          onPress={() => buildNumber('4')}
          color={colors.darkGray}
          label="4"></CalculatorBotton>
        <CalculatorBotton
          onPress={() => buildNumber('5')}
          color={colors.darkGray}
          label="5"></CalculatorBotton>
        <CalculatorBotton
          onPress={() => buildNumber('6')}
          color={colors.darkGray}
          label="6"></CalculatorBotton>
        <CalculatorBotton
          label="-"
          onPress={() => subtractOperation()}
          color={colors.orange}></CalculatorBotton>
      </View>
      <View style={styles.row}>
        <CalculatorBotton
          onPress={() => buildNumber('1')}
          color={colors.darkGray}
          label="1"></CalculatorBotton>
        <CalculatorBotton
          onPress={() => buildNumber('2')}
          color={colors.darkGray}
          label="2"></CalculatorBotton>
        <CalculatorBotton
          onPress={() => buildNumber('3')}
          color={colors.darkGray}
          label="3"></CalculatorBotton>
        <CalculatorBotton
          label="+"
          onPress={() => addOperation()}
          color={colors.orange}></CalculatorBotton>
      </View>
      <View style={styles.row}>
        <CalculatorBotton
          onPress={() => buildNumber('0')}
          color={colors.darkGray}
          label="0"
          doubleSize={true}></CalculatorBotton>

        <CalculatorBotton
          onPress={() => buildNumber('.')}
          color={colors.darkGray}
          label="."></CalculatorBotton>
        <CalculatorBotton
          label="="
          onPress={() => calculateResult()}
          color={colors.orange}></CalculatorBotton>
      </View>
    </View>
  );
};

export default CalculatorScreen;
