import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
import { ProgressBar } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import Svg, { Path } from "react-native-svg";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileScreen: React.FC = () => {
  const navigation = useNavigation();
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // Retrieve email from AsyncStorage
        const email = await AsyncStorage.getItem("userEmail");
        if (!email) {
          console.error("No email found in storage");
          return;
        }

        const response = await fetch(`http://10.16.49.195:5000/auth/profile?email=${email}`);
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#F09216" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Svg height="200" width="100%" viewBox="0 0 360 200" style={styles.curve}>
            <Path
              fill="white"
              d="M0,100 Q180,200 360,100 T720,100 T1080,100 T1440,100 V200 H0 Z"
            />
          </Svg>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('home')}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <View style={styles.profileImageContainer}>
            <Image source={{ uri: "https://via.placeholder.com/80" }} style={styles.profileImage} />
          </View>
        </View>

        <Text style={styles.name}>{profile.firstName} {profile.lastName}</Text>
        <Text style={styles.subtitle}>{profile.branch}</Text>
        <TouchableOpacity style={styles.editIcon}>
          <Ionicons name="create-outline" size={20} color="black" />
        </TouchableOpacity>

        <View style={styles.progressContainer}>
          <Text style={styles.progressLabel}>Your progress</Text>
          <View style={styles.progressRow}>
            <Text style={styles.progressPercentage}>30 % Completed</Text>
            <Text style={styles.progressTime}>⏳ 50min</Text>
          </View>
          <ProgressBar progress={0.3} color="#F1C21B" style={styles.progressBar} />
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.info}>{profile.email}</Text>
          <Text style={styles.label}>First Name</Text>
          <Text style={styles.info}>{profile.firstName}</Text>
          <Text style={styles.label}>Last Name</Text>
          <Text style={styles.info}>{profile.lastName}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Year of Study</Text>
          <Text style={styles.info}>{profile.yearOfStudy}</Text>
          <Text style={styles.label}>Course</Text>
          <Text style={styles.info}>{profile.course}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  headerContainer: {
    width: "100%",
    height: 150,
    backgroundColor: "#F09216",
    alignItems: "center",
    justifyContent: "flex-end",
    position: "relative",
  },
  curve: { position: "absolute", top: 0 },
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