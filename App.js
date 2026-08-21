import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import TemperatureScreen from './screens/TemperatureScreen';
import { Text } from 'react-native-paper';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
        <Text variant="titleLarge" style={styles.headerTitle}>
          Convertidor
        </Text>
        <TemperatureScreen />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  headerTitle: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingHorizontal: 16,
    textAlign: 'left',
    color: '#ffffff',
    fontWeight: '700',
    backgroundColor: '#5005F2',
  },
});