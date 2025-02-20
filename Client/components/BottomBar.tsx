import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function BottomBar() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tab}>
        <MaterialIcons name="home" size={24} color="white" />
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#FFA500', 
  },
  tab: {
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 12,
  },
});
