import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Icon from './assets/svgs/icon';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Loop line</Text>
      <Icon name='chat' size={42} />
      <Icon name='bell' fill={'red'} />
      <StatusBar style="auto" />
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
