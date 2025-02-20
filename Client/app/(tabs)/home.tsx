import React, { useState, useEffect } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { List, ActivityIndicator } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { theme } from '../../theme'; 

export default function HomeScreen() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [expandedSubject, setExpandedSubject] = useState(null);
  const [expandedChapter, setExpandedChapter] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetchSubjects(); // Fetch data on mount
  }, []);

  const fetchSubjects = async () => {
    try {
      // TODO: Replace this with actual API call when backend is ready
      // Example API call: const response = await fetch('https://your-api-endpoint.com/subjects');
      // const jsonData = await response.json();
      
      // Hardcoded data for now
      const response = await new Promise((resolve) =>
        setTimeout(
          () =>
            resolve([
              {
                id: '1',
                name: 'Mathematics',
                chapters: [
                  {
                    id: '1-1',
                    name: 'Algebra',
                    topics: [
                      { id: '1-1-1', name: 'Linear Equations', description: 'Understanding Linear Equations' },
                      { id: '1-1-2', name: 'Quadratic Equations', description: 'Introduction to Quadratic Equations' },
                    ],
                  },
                  {
                    id: '1-2',
                    name: 'Geometry',
                    topics: [{ id: '1-2-1', name: 'Triangles', description: 'Types of Triangles' }],
                  },
                ],
              },
              {
                id: '2',
                name: 'Physics',
                chapters: [
                  {
                    id: '2-1',
                    name: 'Kinematics',
                    topics: [{ id: '2-1-1', name: 'Velocity', description: 'Concepts of Velocity' }],
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
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {loading ? (
        <ActivityIndicator animating={true} color={theme.colors.primary} size="large" />
      ) : (
        data.map((subject) => (
          <List.Accordion
            key={subject.id}
            title={subject.name}
            expanded={expandedSubject === subject.id}
            onPress={() => setExpandedSubject(expandedSubject === subject.id ? null : subject.id)}
            left={(props) => <List.Icon {...props} icon="book" />}
          >
            {subject.chapters.map((chapter) => (
              <List.Accordion
                key={chapter.id}
                title={chapter.name}
                expanded={expandedChapter === chapter.id}
                onPress={() => setExpandedChapter(expandedChapter === chapter.id ? null : chapter.id)}
                left={(props) => <List.Icon {...props} icon="folder" />}
              >
                {chapter.topics.map((topic) => (
                  <List.Item
                    key={topic.id}
                    title={topic.name}
                    onPress={() =>
                      router.push({
                        pathname: '/topic', 
                        params: { id: topic.id, name: topic.name, description: topic.description },
                      })
                    }
                    left={(props) => <List.Icon {...props} icon="file-document" />}
                  />
                ))}
              </List.Accordion>
            ))}
          </List.Accordion>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
});
