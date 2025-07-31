import React, { useState, useEffect } from 'react';
import { ScrollView, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, List, ActivityIndicator } from 'react-native-paper';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { IconButton } from 'react-native-paper';
import { theme } from '../../theme';
import { curriculum } from '../../src/data/curriculum';

export default function HomeScreen() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedSubject, setExpandedSubject] = useState(null);
  const [expandedChapters, setExpandedChapters] = useState({});
  const [expandedTopics, setExpandedTopics] = useState({});
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setData(curriculum);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const toggleChapter = (chapterId) => {
    setExpandedChapters((prev) => ({
      ...prev,
      [chapterId]: !prev[chapterId],
    }));
  };

  const toggleTopic = (topicId) => {
    setExpandedTopics((prev) => ({
      ...prev,
      [topicId]: !prev[topicId],
    }));
  };

  const handleSignOut = async () => {
    await AsyncStorage.removeItem("authToken");
    await AsyncStorage.removeItem("userEmail");
    router.replace("/(auth)/loginScreen");
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        {loading ? (
          <ActivityIndicator animating={true} color={theme.colors.primary} size="large" />
        ) : (
          data.map((subject) => (
            <Card key={subject.id} style={styles.card}>
              <TouchableOpacity onPress={() => setExpandedSubject(expandedSubject === subject.id ? null : subject.id)}>
                <Card.Title
                  title={subject.name}
                  titleNumberOfLines={5}
                  titleStyle={{ fontFamily: "Poppins-Bold" }}
                  left={(props) => <List.Icon {...props} icon="book" />}
                  right={(props) => (
                    <List.Icon
                      {...props}
                      icon={expandedSubject === subject.id ? "chevron-up" : "chevron-down"}
                      style={{ marginRight: 15 }}
                    />
                  )}
                />
              </TouchableOpacity>

              {expandedSubject === subject.id && (
                <Card.Content>
                  {subject.chapters.map((chapter) => (
                    <List.Accordion
                      key={chapter.id}
                      title={chapter.name}
                      titleNumberOfLines={5}
                      titleStyle={{ fontFamily: "Poppins-Regular" }}
                      expanded={!!expandedChapters[chapter.id]}
                      onPress={() => toggleChapter(chapter.id)}
                      left={(props) => <List.Icon {...props} icon="folder" />}
                      style={styles.chapterDropdown}
                    >
                      {chapter.topics.map((topic) => {
                        const hasChildren = topic.children && topic.children.length > 0;
                        return hasChildren ? (
                          <List.Accordion
                            key={topic.id}
                            title={topic.name}
                            titleNumberOfLines={5}
                            titleStyle={{ fontFamily: "Poppins-Bold" }}
                            expanded={!!expandedTopics[topic.id]}
                            onPress={() => toggleTopic(topic.id)}
                            left={(props) => <List.Icon {...props} icon="folder-outline" />}
                            style={styles.topicParent}
                          >
                            {topic.children.map((child) => (
                              <List.Item
                                key={child.id}
                                title={child.name}
                                titleNumberOfLines={5}
                                titleStyle={{ fontFamily: "Poppins-Regular" }}
                                onPress={() =>
                                  router.push({
                                    pathname: "/topic",
                                    params: {
                                      chapter: chapter.name,
                                      name: child.name,
                                    },
                                  })
                                }
                                left={(props) => <List.Icon {...props} icon="file-document" />}
                                style={styles.topicItem}
                              />
                            ))}
                          </List.Accordion>
                        ) : (
                          <List.Item
                            key={topic.id}
                            title={topic.name}
                            titleNumberOfLines={5}
                            titleStyle={{ fontFamily: "Poppins-Regular" }}
                            onPress={() =>
                              router.push({
                                pathname: "/topic",
                                params: {
                                  chapter: chapter.name,
                                  id: topic.id,
                                  name: topic.name,
                                },
                              })
                            }
                            left={(props) => <List.Icon {...props} icon="file-document-outline" />}
                            style={styles.topicItem}
                          />
                        );
                      })}
                    </List.Accordion>
                  ))}
                </Card.Content>
              )}
            </Card>
          ))
        )}
      </ScrollView>

      <TouchableOpacity
        style={{ alignSelf: "flex-end", margin: 16, backgroundColor: "#F09216", padding: 10, borderRadius: 8 }}
        onPress={handleSignOut}
      >
        <IconButton icon="logout" size={20} iconColor="white" style={{ margin: 0 }} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  card: {
    marginBottom: 15,
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 3,
  },
  chapterDropdown: {
    backgroundColor: "#f5f5f5",
    paddingLeft: 10,
  },
  topicParent: {
    backgroundColor: "white",
    paddingLeft: 30,
  },
  topicItem: {
    paddingLeft: 30,
  },
  floatingButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#F09216",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});
