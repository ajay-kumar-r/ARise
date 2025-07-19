import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { useLocalSearchParams } from "expo-router";
import { topicData } from "../../src/data/topicContent";

const TopicScreen = () => {
  const { chapter, name } = useLocalSearchParams<{
    chapter: string;
    name: string;
  }>();

  // Find the unit that matches the chapter name
  const matchedUnit = topicData.find((unit) => unit.unit === chapter);

  // Initialize matchedContent
  let matchedContent = null;

  if (matchedUnit) {
    matchedContent = matchedUnit.sections.find((sec) => sec.title === name);

    if (!matchedContent) {
      for (const section of matchedUnit.sections) {
        if (section.subsections) {
          const sub = section.subsections.find((s) => s.title === name);
          if (sub) {
            matchedContent = {
              ...sub,
              parentTitle: section.title,
              parentContent: section.content,
            };
            break;
          }
        }
      }
    }
  }

  if (!matchedUnit || !matchedContent) {
    return (
      <View style={styles.fullScreenWhite}>
        <Text
          variant="titleMedium"
          style={[styles.unitTitle, { paddingTop: 275, fontSize: 24, padding: 5 }]}
        >
          Content not found. Please go back and try again.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.fullScreenWhite}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.unitTitle}>{matchedUnit.unit}</Text>

        {"parentTitle" in matchedContent ? (
          <>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>{matchedContent.parentTitle}</Text>
              <Text style={styles.sectionContent}>{matchedContent.parentContent}</Text>
            </View>

            <View style={styles.subSectionCard}>
              <Text style={styles.subTitle}>{matchedContent.title}</Text>
              <Text style={styles.content}>{matchedContent.content}</Text>
            </View>
          </>
        ) : (
          <>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>{matchedContent.title}</Text>
              <Text style={styles.sectionContent}>{matchedContent.content}</Text>
            </View>

            {matchedContent.subsections?.map((sub, idx) => (
              <View key={idx} style={styles.subSectionCard}>
                <Text style={styles.subTitle}>{sub.title}</Text>
                <Text style={styles.content}>{sub.content}</Text>
              </View>
            ))}
          </>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  fullScreenWhite: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 100,
  },
  unitTitle: {
    fontSize: 24,
    fontFamily: "Poppins-Bold",
    textAlign: "center",
    marginBottom: 30,
  },
  section: {
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: "Poppins-Bold",
    color: "#000",
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 15,
    fontFamily: "Poppins-Regular",
    color: "#444",
    lineHeight: 24,
  },
  subSectionCard: {
    backgroundColor: "#f9f9f9",
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  subTitle: {
    fontSize: 16,
    fontFamily: "Poppins-Bold",
    marginBottom: 6,
    color: "#000",
  },
  content: {
    fontSize: 15,
    fontFamily: "Poppins-Regular",
    lineHeight: 24,
    color: "#333",
  },
});

export default TopicScreen;
