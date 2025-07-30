import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useRouter } from 'expo-router';
import * as Font from 'expo-font';

export default function IndexScreen() {
  const router = useRouter();
  const logoRef = useRef<any>(null);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        "Play-Regular": require('../assets/fonts/Play-Regular.ttf'),
        "Play-Bold": require('../assets/fonts/Play-Bold.ttf'),
        "Poppins-Regular": require('../assets/fonts/Poppins-Regular.ttf'),
        "Poppins-Bold": require('../assets/fonts/Poppins-Bold.ttf'),
        "Poppins-SemiBold": require('../assets/fonts/Poppins-SemiBold.ttf'),
        "NanumGothic-Regular": require('../assets/fonts/NanumGothic-Regular.ttf'),
        "NanumGothic-Bold": require('../assets/fonts/NanumGothic-Bold.ttf'),
        "NanumGothic-ExtraBold": require('../assets/fonts/NanumGothic-ExtraBold.ttf'),
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  useEffect(() => {
    if (fontsLoaded) {
      logoRef.current?.bounceIn();
    }
  }, [fontsLoaded]);

  const handleGetStarted = () => {
    setTimeout(() => {
      router.push('/(auth)/loginScreen');
    }, 100);
  };

  const handleGetBot = () => {
    setTimeout(() => {
      router.push('/(bot)/chatbot');
    }, 100);
  };

  const handleGetContributors = () => {
    setTimeout(() => {
      router.push('/(contributors)/leads');
    }, 100);
  };

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#F7931E" />
      </View>
    );
  }

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
          <Text style={[styles.subText, {fontFamily: 'Poppins-Bold'}]}>
            Welcome to ARise! The solution which gives rise to Data Structures
          </Text>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
          <Text style={[styles.buttonText, {fontFamily: 'Poppins-SemiBold'}]}>Let’s get stARted</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.button} onPress={handleGetBot}>
          <Text style={[styles.buttonText, {fontFamily: 'Poppins-SemiBold'}]}>ChatBot</Text>
        </TouchableOpacity> */}
        <TouchableOpacity onPress={handleGetContributors}>
          <Text style={styles.contributorLink}>👥 View Contributors</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
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
    marginBottom: 0,
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
    fontSize: 16,
  },
  subText: {
    textAlign: 'center',
    fontSize: 22,    
    color: '#333',
    marginTop: 0,
  },
  contributorLink: {
  marginTop: 20,
  color: '#F7931E',
  fontSize: 16,
  fontFamily: 'Poppins-Regular',
},
});
