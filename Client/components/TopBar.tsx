import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  Pressable,
  TextInput,
  ScrollView
} from 'react-native';
import { Portal } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { curriculum } from '../src/data/curriculum';

export default function TopBar() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const router = useRouter();

  const handleDashboard = () => {
    setMenuVisible(false);
    router.push('/ProfileScreen');
  };

  const handleSignOut = () => {
    setMenuVisible(false);
    alert('Signed out');
    router.replace('/');
  };

  useEffect(() => {
    if (searchText.trim() === '') {
      setSearchResults([]);
      return;
    }

    const results = [];
    curriculum.forEach((subject) => {
      subject.chapters.forEach((chapter) => {
        if (chapter.name.toLowerCase().includes(searchText.toLowerCase())) {
          results.push({
            type: 'chapter',
            subjectName: subject.name,
            chapterName: chapter.name,
            id: chapter.id,
            displayName: `${chapter.name} (Chapter)`,
          });
        }
        chapter.topics.forEach((topic) => {
          if (topic.name.toLowerCase().includes(searchText.toLowerCase())) {
            results.push({
              type: 'topic',
              subjectName: subject.name,
              chapterName: chapter.name,
              topicId: topic.id,
              topicName: topic.name,
              displayName: topic.name,
            });
          }
          if (topic.children) {
            topic.children.forEach((child) => {
              if (child.name.toLowerCase().includes(searchText.toLowerCase())) {
                results.push({
                  type: 'topicChild',
                  subjectName: subject.name,
                  chapterName: chapter.name,
                  topicId: child.id,
                  topicName: child.name,
                  displayName: child.name,
                });
              }
            });
          }
        });
      });
    });

    setSearchResults(results);
  }, [searchText]);

  const handleSelectResult = (item) => {
    setSearchText('');
    setSearchResults([]);
    setSearchVisible(false);

    if (item.type === 'chapter') {
      router.push({
        pathname: '/topic',
        params: { chapter: item.chapterName, name: item.chapterName },
      });
    } else {
      router.push({
        pathname: '/topic',
        params: { chapter: item.chapterName, id: item.topicId, name: item.topicName },
      });
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/AR.png')} style={styles.logo} />

      <View style={styles.buttonsContainer}>
        {!searchVisible ? (
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => {
              setMenuVisible(false);
              setSearchVisible(true);
              setSearchText('');
            }}
          >
            <Ionicons name="search" size={24} color="black" />
          </TouchableOpacity>
        ) : (
          <View style={styles.searchContainer}>
            <TextInput
              autoFocus
              placeholder="Search..."
              placeholderTextColor="#666"
              style={styles.searchInput}
              value={searchText}
              onChangeText={setSearchText}
            />
            <TouchableOpacity
              onPress={() => {
                setSearchVisible(false);
                setSearchText('');
                setSearchResults([]);
              }}
              style={styles.clearButton}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Ionicons name="close" size={20} color="#333" />
            </TouchableOpacity>
          </View>
        )}

        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => {
            setMenuVisible(!menuVisible);
            setSearchVisible(false);
            setSearchText('');
            setSearchResults([]);
          }}
        >
          <Ionicons name="menu" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {searchVisible && searchResults.length > 0 && (
        <Portal>
          <View style={styles.portalContainer}>
            <View style={styles.searchResultsWrapper}>
              <ScrollView keyboardShouldPersistTaps="handled">
                {searchResults.map((item, index) => (
                  <TouchableOpacity key={index.toString()} style={styles.resultItem} onPress={() => handleSelectResult(item)}>
                    <Text style={styles.resultText}>{item.displayName}</Text>
                    <Text style={styles.resultSubText}>
                      {item.chapterName} · {item.subjectName}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </View>
        </Portal>
      )}


      {menuVisible && (
        <Portal>
          <Pressable style={StyleSheet.absoluteFillObject} onPress={() => setMenuVisible(false)} />
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
        </Portal>
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
    zIndex: 10,
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
    fontFamily: 'Poppins-Regular',
    color: 'black',
  },
  signOutText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: 'red',
  },
  menuDivider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 5,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 36,
    width: 200,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: 'black',
    paddingVertical: 0,
  },
  clearButton: {
    marginLeft: 10,
  },
  searchResultsWrapper: {
    position: 'absolute',
    top: 82,
    right: 15,
    backgroundColor: 'white',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    width: 260,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    zIndex: 1001,
    overflow: 'hidden',
    maxHeight: 240,
  },
  resultItem: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  resultText: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: '#000',
  },
  resultSubText: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#666',
  },
});
