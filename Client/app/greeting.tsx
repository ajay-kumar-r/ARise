import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useRouter } from 'expo-router';

export default function GreetingScreen() {
  const router = useRouter();
  const logoRef = useRef<any>(null);

  useEffect(() => {
    logoRef.current?.bounceIn();
  }, []);

  const handleGetStarted = () => {
    setTimeout(() => {
      router.replace('/(auth)/loginScreen');
    }, 100);
  };

  const handleGetBot = () => {
    setTimeout(() => {
      router.replace('/(bot)/chatbot');
    }, 100);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.logoContainer}>
          <Animatable.Image
            ref={logoRef}
            animation="bounceIn"
            iterationCount="infinite"
            duration={1500}
            source={require('../assets/images/AR.png')} 
            style={styles.logoImage}
            resizeMode="contain"
          />
          <Text style={styles.subText}>
            Welcome to ARise! The solution which gives rise to Data Structures
          </Text>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
          <Text style={styles.buttonText}>Let’s get stARted</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleGetBot}>
          <Text style={styles.buttonText}>ChatBot</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  topContainer: {
    flex: 2,
    backgroundColor: '#F7931E',
    borderBottomRightRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  logoContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logoImage: {
    width: 300,
    height: 300,
  },
  bottomContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
  },
  button: {
    backgroundColor: '#F7931E',
    width: '80%',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#333',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  buttonText: {
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  subText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#333',
    fontWeight: '800',
    marginTop: 0,
  },
});
