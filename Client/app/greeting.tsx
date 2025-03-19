import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { theme } from '../theme';

export default function GreetingScreen() {
  const router = useRouter();

  const handleGetStarted = () => {
    setTimeout(() => {
      router.replace('/(auth)/loginScreen');  
    }, 100);
  };
  const handleGetBOt = () => {
    setTimeout(() => {
      router.replace('/(bot)/chatbot');  
    }, 100);
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/images/welcome.jpg')} 
        style={styles.image}
      />

      <Text variant="bodyLarge" style={styles.description}>
        Welcome to ARise! The solution which gives rise to Data Structures.
      </Text>

      <Button 
        mode="contained" 
        buttonColor={theme.colors.primary} 
        textColor={theme.colors.onPrimary} 
        style={styles.button}
        onPress={handleGetStarted} 
      >
        Get Started
      </Button>
      <Button 
        mode="contained" 
        buttonColor={theme.colors.primary} 
        textColor={theme.colors.onPrimary} 
        style={styles.button}
        onPress={handleGetBOt} 
      >
        ChatBot
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  description: {
    textAlign: 'center',
    color: theme.colors.text,
    marginBottom: 20,
  },
  button: {
    width: '80%',
    margin: 5,  
  },
});
