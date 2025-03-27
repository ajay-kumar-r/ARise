import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, ActivityIndicator } from 'react-native-paper';
import { useLocalSearchParams } from 'expo-router';

export default function TopicScreen() {
  const params = useLocalSearchParams();
  const topicName = params.chapter || 'Unknown Subject';
  const subsection = params.name || 'Unknown Subsection';

  const [loading, setLoading] = useState(true);
  const [topicDetails, setTopicDetails] = useState(null);

  useEffect(() => {
    // Reset state when the component is re-rendered for a new topic
    setTopicDetails(null);
    setLoading(true);
    fetchSubtopicDetails();
  }, [topicName, subsection]); // Add dependencies to re-fetch data when topic changes

  const fetchSubtopicDetails = async () => {
    try {
      const response = await fetch("http://10.16.49.195:5000/api/subjects/subtopic-details", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          topicName,
          subsection,
        }),
      });

      const data = await response.json();
      console.log("API Response:", data); // Log the API response for debugging

      // Set the topic details with the content as the array of strings
      setTopicDetails({
        title: topicName, // Use the topic name as the title
        content: data, // Directly use the array of strings as content
      });
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
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Card mode="outlined">
        <Card.Title title={topicDetails?.title || "Unknown Topic"} />
        <Card.Content>
          <Text variant="bodyMedium" style={styles.sectionTitle}>
            {topicDetails?.content?.length > 0 ? "Content:" : "No content available."}
          </Text>
          {topicDetails?.content && Array.isArray(topicDetails.content) ? (
            topicDetails.content.map((point, index) => (
              <Text key={index} style={styles.pointText}>
                • {point}
              </Text>
            ))
          ) : (
            <Text>No content available.</Text>
          )}
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  sectionTitle: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
  pointText: {
    marginTop: 5,
    marginLeft: 10,
    fontSize: 14,
    lineHeight: 20,
  },
});
