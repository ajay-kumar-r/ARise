import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { ProgressBar } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import Svg, { Path } from "react-native-svg";

const ProfileScreen: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        {/* Curved Header */}
        <View style={styles.headerContainer}>
          <Svg height="200" width="100%" viewBox="0 0 360 200" style={styles.curve}>
          <Path
            fill="white"

  d="M0,100 Q180,200 360,100 T720,100 T1080,100 T1440,100 V200 H0 Z"
/>
          </Svg>
          <TouchableOpacity style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <View style={styles.profileImageContainer}>
            <Image source={{ uri: "https://via.placeholder.com/80" }} style={styles.profileImage} />
          </View>
        </View>

        {/* Profile Details */}
        <Text style={styles.name}>Panjavan Parivendhan</Text>
        <Text style={styles.subtitle}>Information Technology</Text>
        <TouchableOpacity style={styles.editIcon}>
          <Ionicons name="create-outline" size={20} color="black" />
        </TouchableOpacity>

        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          <Text style={styles.progressLabel}>Your progress</Text>
          <View style={styles.progressRow}>
            <Text style={styles.progressPercentage}>30 % Completed</Text>
            <Text style={styles.progressTime}>⏳ 50min</Text>
          </View>
          <ProgressBar progress={0.3} color="#F1C21B" style={styles.progressBar} />
        </View>

        {/* Info Cards */}
        <View style={styles.card}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.info}>parivendhan@gmail.com</Text>
          <Text style={styles.label}>First Name</Text>
          <Text style={styles.info}>Panjavan</Text>
          <Text style={styles.label}>Last Name</Text>
          <Text style={styles.info}>Parivendhan</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Year of Study</Text>
          <Text style={styles.info}>3</Text>
          <Text style={styles.label}>Course</Text>
          <Text style={styles.info}>Course 1</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: { flex: 1,  alignItems: "center" },

  /** Header with Curved Background **/
  headerContainer: {
    width: "100%",
    height: 150,
    backgroundColor: "#F09216",//curve colour

    alignItems: "center",
    justifyContent: "flex-end",
    position: "relative",
  },

  curve: {
    position: "absolute",
    top: 0,
  },

  backButton: { position: "absolute", top: 50, left: 20 },

  profileImageContainer: {
    backgroundColor: "white",
    width: 90,
    height: 90,
    borderRadius: 45,
    position: "absolute",
    top: 120,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "#F0921654",
  },

  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    resizeMode: "cover",
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 60,
    textAlign: "center",
  },

  subtitle: {
    fontSize: 14,
    color: "gray",
    textAlign: "center",
  },

  editIcon: { position: "absolute", top: 200, right: 30 },

  /** Progress Section **/
  progressContainer: {
    backgroundColor: "white",
    padding: 15,
    width: "90%",
    borderRadius: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    marginTop: 15,
  },

  progressLabel: {
    fontSize: 14,
    color: "gray",
    fontWeight: "500",
    marginBottom: 5,
  },

  progressRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  progressPercentage: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#DA7C00",
  },

  progressTime: {
    fontSize: 12,
    color: "gray",
  },

  progressBar: {
    width: "100%",
    height: 10,
    borderRadius: 5,
    backgroundColor: "",
    marginTop: 5,
  },

  /** Info Cards **/
  card: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 15,
    width: "90%",
    marginVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },

  label: { fontSize: 14, color: "#F09216CF", marginTop: 10 },

  info: { fontSize: 16, color: "black" },
});
