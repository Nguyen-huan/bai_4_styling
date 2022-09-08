import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.square_1}>Square 1</Text>
      <Text style={styles.square_2}>Square 2</Text>
      <Text style={styles.square_3}>Square 3</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  square_1: {
    height: 80,
    width: 80,
    textAlign: 'center',
    lineHeight: 80,
    backgroundColor: '#7ce0f9',
    color: 'black',
  },
  square_2: {
    height: 80,
    width: 80,
    textAlign: 'center',
    lineHeight: 80,
    backgroundColor: '#4cc2c2',
    color: 'black',
  },
  square_3: {
    height: 80,
    width: 80,
    textAlign: 'center',
    lineHeight: 80,
    backgroundColor: '#ff637c',
    color: 'black',
  },
});


