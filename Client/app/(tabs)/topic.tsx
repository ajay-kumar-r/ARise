import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Card, ActivityIndicator } from 'react-native-paper';
import { useLocalSearchParams } from 'expo-router';

export default function TopicScreen() {
  const params = useLocalSearchParams();
  const topicName = params.name || 'Unknown Subject';
  const subsection = params.description || 'Unknown Subsection';

  const [loading, setLoading] = useState(true);
  const [topicDetails, setTopicDetails] = useState(null);

  useEffect(() => {
    fetchSubtopicDetails();
  }, []);

  const fetchSubtopicDetails = async () => {
    try {
      const response = await fetch("http://10.16.49.195:5000/api/subtopic-details", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          topicName,
          subsection,
        }),
      });
      console.log(topicName, subsection);
      const data = await response.json();
      setTopicDetails(data);
    } catch (error) {
      console.error("Error fetching subtopic details:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#F09216" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Card mode="outlined">
        <Card.Title title={topicDetails?.title || "No Title"} />
        <Card.Content>
          <Text variant="bodyMedium">{topicDetails?.content || "No content available."}</Text>
          {topicDetails?.examples && (
            <>
              <Text style={styles.sectionTitle}>Examples:</Text>
              {topicDetails.examples.map((example, index) => (
                <Text key={index} style={styles.exampleText}>
                  {example}
                </Text>
              ))}
            </>
          )}
          {topicDetails?.resources && (
            <>
              <Text style={styles.sectionTitle}>Resources:</Text>
              {topicDetails.resources.map((resource, index) => (
                <Text key={index} style={styles.resourceText}>
                  {resource.type}: {resource.url}
                </Text>
              ))}
            </>
          )}
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  sectionTitle: {
    marginTop: 10,
    fontWeight: 'bold',
  },
  exampleText: {
    marginTop: 5,
    marginLeft: 10,
  },
  resourceText: {
    marginTop: 5,
    marginLeft: 10,
    color: 'blue',
  },
});
