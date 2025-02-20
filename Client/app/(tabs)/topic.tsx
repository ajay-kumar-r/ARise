import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Card } from 'react-native-paper';
import { useLocalSearchParams } from 'expo-router';

export default function TopicScreen() {
  const params = useLocalSearchParams();
  const name = params.name || 'Unknown Topic';
  const description = params.description || 'No description available.';

  return (
    <View style={styles.container}>
      <Card mode="outlined">
        <Card.Title title={name} />
        <Card.Content>
          <Text variant="bodyMedium">{description}</Text>
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
});
