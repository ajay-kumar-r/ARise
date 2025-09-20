import React, { useRef, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ToastAndroid,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useForm } from "./formContext";

const IP_ADDR = process.env.EXPO_PUBLIC_IP_ADDR;

interface FormData {
  password: string;
  confirmPassword: string;
}


export default function Signup3() {
  const router = useRouter();
  const { formData, setFormData } = useForm();

  const confirmPasswordRef = useRef<TextInput>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async () => {
    if (
      formData.password === "" ||
      formData.confirmPassword === "" ||
      formData.firstName === "" ||
      formData.lastName === "" ||
      formData.username === "" ||
      formData.email === "" ||
      formData.branch === "" ||
      formData.course === "" ||
      formData.yearOfStudy === ""
    ) {
      alert("Please fill in all fields");
      return;
    }

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*_])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      alert(
        "Password must be at least 8 characters long, include at least one uppercase letter, one number, and one special character"
      );
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      console.log("Submitting form data:", formData);

      const response = await fetch(`http://${IP_ADDR}:8000/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: formData.firstName,
          last_name: formData.lastName,
          username: formData.username,
          email: formData.email,
          branch: formData.branch,
          course: formData.course,
          year_of_study: formData.yearOfStudy,
          password: formData.password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Signup successful:", data);
        if (Platform.OS === "android") {
          ToastAndroid.show("Signup completed successfully", ToastAndroid.SHORT);
        } else {
          alert("Signup completed successfully");
        }
        setTimeout(() => {
          router.push("./loginScreen");
        }, 100);
      } else {
        const errorData = await response.json().catch(() => null);
        console.error("Signup failed:", errorData);
        alert(errorData?.message || "Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("An error occurred. Please check your network connection.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.push("./signup2")}
        >
          <Ionicons name="arrow-back" size={24} color="#1D1B20" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Credentials</Text>
        <View style={styles.progressBar}>
          <View style={styles.progressFill} />
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
      >
        <View style={styles.formCard}>
          <ScrollView contentContainerStyle={styles.scrollView}>
            <Text style={styles.formTitle}>Sign in to ARise</Text>
            <Text style={styles.formSubtitle}>
              Please enter your details to proceed
            </Text>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>New Password</Text>
              <View style={styles.passwordWrapper}>
                <TextInput
                  style={styles.input}
                  value={formData.password}
                  onChangeText={(text) => handleChange("password", text)}
                  secureTextEntry={!showPassword}
                  returnKeyType="next"
                  onSubmitEditing={() => confirmPasswordRef.current?.focus()}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={styles.eyeButton}
                >
                  <Ionicons
                    name={showPassword ? "eye-off" : "eye"}
                    size={22}
                    color="grey"
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Confirm Password</Text>
              <View style={styles.passwordWrapper}>
                <TextInput
                  ref={confirmPasswordRef}
                  style={styles.input}
                  value={formData.confirmPassword}
                  onChangeText={(text) => handleChange("confirmPassword", text)}
                  secureTextEntry={!showConfirmPassword}
                  returnKeyType="done"
                  onSubmitEditing={handleSubmit}
                />
                <TouchableOpacity
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                  style={styles.eyeButton}
                >
                  <Ionicons
                    name={showConfirmPassword ? "eye-off" : "eye"}
                    size={22}
                    color="grey"
                  />
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              style={styles.signupButton}
              onPress={handleSubmit}
            >
              <Text style={styles.signupButtonText}>Sign up</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F09216",
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  backButton: {
    top: 40,
    marginBottom: 55,
    zIndex: 10,
  },
  headerTitle: {
    color: "white",
    fontSize: 24,
    fontFamily: "Poppins-Bold",
    marginBottom: 10,
  },
  progressBar: {
    height: 8,
    backgroundColor: "#7878801F",
    borderRadius: 9,
    width: 330,
    padding: 2,
    alignItems: "center",
    position: "relative",
  },
  progressFill: {
    width: 110,
    height: "100%",
    right: 0,
    backgroundColor: "#FFFFFF",
    position: "absolute",
    borderRadius: 7,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
  formCard: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
    paddingTop: 30,
  },
  formTitle: {
    fontSize: 24,
    fontFamily: "Poppins-Bold",
    color: "#B66800",
    marginBottom: 8,
  },
  formSubtitle: {
    fontSize: 13,
    color: "#000000A6",
    marginBottom: 25,
    fontFamily: "NanumGothic-Bold",
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    color: "#0000005C",
    marginBottom: 8,
    fontFamily: "Poppins-Regular",
  },
  passwordWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  input: {
    flex: 1,
    paddingVertical: 8,
    fontSize: 16,
  },
  eyeButton: {
    padding: 10,
  },
  signupButton: {
    backgroundColor: "#F09216",
    borderRadius: 13,
    paddingVertical: 8,
    alignItems: "center",
    marginTop: 13,
  },
  signupButtonText: {
    color: "#1E1E1EC2",
    fontSize: 18,
    fontFamily: "Poppins-SemiBold",
  },
});
