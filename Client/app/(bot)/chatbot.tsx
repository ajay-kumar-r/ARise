import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import { IconButton, TextInput } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function Chatbot() {
  const router = useRouter();
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleBack = () => {
    setTimeout(() => {
      router.replace('/');
    }, 100);
  };

  const handleSend = () => {
    if (inputText.trim() === '') return;
    
 
    const newMessage = { id: messages.length + 1, text: inputText, sender: 'user' };
    setMessages([...messages, newMessage]);
    setInputText('');


    setTimeout(() => {
      const botReply = {
        id: messages.length + 2,
        text: "I'm here to help! How can I assist you?",
        sender: 'bot',
      };
      setMessages((prevMessages) => [...prevMessages, botReply]);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftSection}>
          <IconButton icon="robot" size={40} color="black" />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Helpy</Text>
            <Text style={styles.onlineText}>Online</Text>
          </View>
        </View>
        <IconButton icon="chevron-left" size={24} color="black" onPress={handleBack} />
      </View>

    
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={[styles.messageContainer, item.sender === 'user' ? styles.userMessage : styles.botMessage]}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
        contentContainerStyle={styles.chatContainer}
      
      />


      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.inputContainer}
      >
        <View style={styles.inputWrapper}>
          <TextInput
            value={inputText}
            onChangeText={setInputText}
            placeholder="Message..."
            style={styles.input}
            underlineColor="transparent"
            placeholderTextColor="#999" 
          />
          <IconButton icon="send" size={28}  color="orange" style={{ transform: [{ rotate: '320deg' }] }} onPress={handleSend} />
        </View>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    height: 85,
    backgroundColor: '#FFA500',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: 10,
  },
  title: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  onlineText: {
    fontSize: 14,
    fontWeight: '400',
  },
  chatContainer: {
    flexGrow: 1,
    padding: 10,
  },
  messageContainer: {
    maxWidth: '70%',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#E0E0E0',
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFA500',
  },
  messageText: {
    color: 'black',
  },

  inputContainer: {
    paddingBottom: 10, 
    paddingHorizontal: 10,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 50, 
    paddingHorizontal: 15,
    paddingVertical: 5,
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5, 
  },
  input: {
    flex: 1,
    fontSize: 16,
    backgroundColor:'transparent',

  },
});

