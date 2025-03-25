import React, { useState } from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  Pressable,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function TopBar() {
  const [menuVisible, setMenuVisible] = useState(false);
  const router = useRouter();

  const handleDashboard = () => {
    setMenuVisible(false);
    router.push('/ProfileScreen');
  };

  const handleSignOut = () => {
    setMenuVisible(false);
    alert('Signed out');
    router.replace('/greeting');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/AR.png')} style={styles.logo} />

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="search" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => setMenuVisible(!menuVisible)}
        >
          <Ionicons name="menu" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {menuVisible && (
        <>
          <Pressable
            style={StyleSheet.absoluteFillObject}
            onPress={() => setMenuVisible(false)}
          />

          <View style={styles.menuContainer}>
            <TouchableOpacity style={styles.menuItem} onPress={handleDashboard}>
              <Ionicons name="person-circle" size={20} color="black" style={styles.menuIcon} />
              <Text style={styles.menuText}>Dashboard</Text>
            </TouchableOpacity>

            <View style={styles.menuDivider} />

            <TouchableOpacity style={styles.menuItem} onPress={handleSignOut}>
              <Ionicons name="log-out" size={20} color="red" style={styles.menuIcon} />
              <Text style={styles.signOutText}>Sign Out</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 95,
    backgroundColor: '#F09216',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 30,
    paddingHorizontal: 15,
  },
  logo: {
    width: 85,
    height: 85,
    resizeMode: 'contain',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 15,
  },
  menuContainer: {
    position: 'absolute',
    top: 85,
    right: 15,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
    zIndex: 1000,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  menuIcon: {
    marginRight: 10,
  },
  menuText: {
    fontSize: 16,
    color: 'black',
  },
  signOutText: {
    fontSize: 16,
    color: 'red',
  },
  menuDivider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 5,
  },
});
