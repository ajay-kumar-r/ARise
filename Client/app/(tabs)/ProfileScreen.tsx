import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator, TextInput } from "react-native";
import { ProgressBar } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import Svg, { Path } from "react-native-svg";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const IP_ADDR = process.env.EXPO_PUBLIC_IP_ADDR;

const ProfileScreen: React.FC = () => {
  const navigation = useNavigation();
  const [profile, setProfile] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [editMode, setEditMode] = useState(false);
  const [editProfile, setEditProfile] = useState<any>({});

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const email = await AsyncStorage.getItem("userEmail");
        const token = await AsyncStorage.getItem("authToken");
        if (!email || !token) {
          console.error("No email or token found in storage");
          return;
        }
        const response = await fetch(`${IP_ADDR}/auth/profile?email=${email}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        // Map snake_case to camelCase
        const mappedProfile = {
          email: data.email,
          firstName: data.first_name,
          lastName: data.last_name,
          username: data.username,
          branch: data.branch,
          course: data.course,
          yearOfStudy: data.year_of_study,
        };
        setProfile(mappedProfile);
        setEditProfile(mappedProfile); 
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleSave = async () => {
    try {
      const email = await AsyncStorage.getItem("userEmail");
      const token = await AsyncStorage.getItem("authToken");
      if (!email || !token) {
        console.error("No email or token found in storage");
        return;
      }
      // Prepare data for submission
      const dataToSubmit = {
        ...editProfile,
        email, // Include email from AsyncStorage
      };
      const response = await fetch(`${IP_ADDR}/auth/profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(dataToSubmit),
      });
      if (!response.ok) {
        throw new Error("Failed to update profile");
      }
      const updatedData = await response.json();
      // Map snake_case to camelCase
      const mappedUpdatedProfile = {
        email: updatedData.email,
        firstName: updatedData.first_name,
        lastName: updatedData.last_name,
        username: updatedData.username,
        branch: updatedData.branch,
        course: updatedData.course,
        yearOfStudy: updatedData.year_of_study,
      };
      setProfile(mappedUpdatedProfile);
      setEditProfile(mappedUpdatedProfile); // Update editProfile with the response data
      setEditMode(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

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
        </View>

        <Text style={styles.name}>{profile.firstName} {profile.lastName}</Text>
        <Text style={styles.subtitle}>{profile.branch}</Text>
        <TouchableOpacity style={styles.editIcon} onPress={() => setEditMode(!editMode)}>
          <Ionicons name={editMode ? "checkmark-outline" : "create-outline"} size={20} color="black" />
        </TouchableOpacity>


        <View style={styles.card}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.info}
            value={editProfile.email}
            editable={false} // Email is always non-editable
          />
          <Text style={styles.label}>First Name</Text>
          {editMode ? (
            <TextInput
              style={styles.info}
              value={editProfile.firstName}
              onChangeText={text => setEditProfile({ ...editProfile, firstName: text })}
            />
          ) : (
            <Text style={styles.info}>{profile.firstName}</Text>
          )}
          <Text style={styles.label}>Last Name</Text>
          {editMode ? (
            <TextInput
              style={styles.info}
              value={editProfile.lastName}
              onChangeText={text => setEditProfile({ ...editProfile, lastName: text })}
            />
          ) : (
            <Text style={styles.info}>{profile.lastName}</Text>
          )}
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Year of Study</Text>
          {editMode ? (
            <TextInput
              style={styles.info}
              value={editProfile.yearOfStudy}
              onChangeText={text => setEditProfile({ ...editProfile, yearOfStudy: text })}
            />
          ) : (
            <Text style={styles.info}>{profile.yearOfStudy}</Text>
          )}
          <Text style={styles.label}>Course</Text>
          {editMode ? (
            <TextInput
              style={styles.info}
              value={editProfile.course}
              onChangeText={text => setEditProfile({ ...editProfile, course: text })}
            />
          ) : (
            <Text style={styles.info}>{profile.course}</Text>
          )}
        </View>

        {editMode && (
          <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 20 }}>
            <TouchableOpacity
              style={[styles.loginButton, { marginRight: 10 }]}
              onPress={async () => {
                // TODO: Send updated data to backend here
                setProfile(editProfile);
                setEditMode(false);
              }}
            >
              <Text style={styles.loginButtonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => setEditMode(false)}
            >
              <Text style={styles.loginButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        )}
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
  loginButton: {
    backgroundColor: "#F09216",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  loginButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});