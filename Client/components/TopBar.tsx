import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TopBar() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ARise</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 85,
    backgroundColor: '#FFA500',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20, 
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
