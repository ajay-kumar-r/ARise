import React, { useState, useEffect } from 'react';
import { ScrollView, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, List, ActivityIndicator } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { theme } from '../../theme'; 
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedSubject, setExpandedSubject] = useState(null);
  const [expandedChapters, setExpandedChapters] = useState({});
  const router = useRouter();

  useEffect(() => {
    fetchSubjects();
  }, []);

  const fetchSubjects = async () => {
    try {
      // TODO: Replace this with actual API call when backend is ready
      // Example: const response = await fetch('https://your-api-endpoint.com/subjects');
      // const jsonData = await response.json();
      const response = await new Promise((resolve) =>
        setTimeout(
          () =>
            resolve([
              {
                id: "1",
                name: "Mathematics",
                chapters: [
                  {
                    id: "1-1",
                    name: "Algebra",
                    topics: [
                      { id: "1-1-1", name: "Linear Equations", description: "Understanding Linear Equations" },
                      { id: "1-1-2", name: "Quadratic Equations", description: "Introduction to Quadratic Equations" },
                    ],
                  },
                  {
                    id: "1-2",
                    name: "Geometry",
                    topics: [{ id: "1-2-1", name: "Triangles", description: "Types of Triangles" }],
                  },
                ],
              },
              {
                id: "2",
                name: "Physics",
                chapters: [
                  {
                    id: "2-1",
                    name: "Kinematics",
                    topics: [{ id: "2-1-1", name: "Velocity", description: "Concepts of Velocity" }],
                  },
                ],
              },
            ]),
          1000
        )
      );

      setData(response);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const toggleChapter = (chapterId) => {
    setExpandedChapters((prev) => ({
      ...prev,
      [chapterId]: !prev[chapterId],
    }));
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
                      expanded={!!expandedChapters[chapter.id]}
                      onPress={() => toggleChapter(chapter.id)}
                      left={(props) => <List.Icon {...props} icon="folder" />}
                      style={styles.chapterDropdown}
                    >
                      {chapter.topics.map((topic) => (
                        <List.Item
                          key={topic.id}
                          title={topic.name}
                          onPress={() =>
                            router.push({
                              pathname: "/topic",
                              params: { id: topic.id, name: topic.name, description: topic.description },
                            })
                          }
                          left={(props) => <List.Icon {...props} icon="file-document" />}
                          style={styles.topicItem}
                        />
                      ))}
                    </List.Accordion>
                  ))}
                </Card.Content>
              )}
            </Card>
          ))
        )}
      </ScrollView>

      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => router.push("/chatbot")}
      >
        <Ionicons name="chatbubble-ellipses" size={24} color="white" />
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
  },
  topicItem: {
    marginLeft: 30,
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
