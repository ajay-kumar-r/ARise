import React, { useRef } from "react";
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
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useForm } from "./formContext";
import { ToastAndroid } from "react-native";

interface FormData {
  password: string;
  confirmPassword: string;
}

export default function Signup3() {
  const router = useRouter();
  const { formData, setFormData } = useForm();

  const confirmPasswordRef = useRef<TextInput>(null);

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    if (formData.password === "" || formData.confirmPassword === "") {
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
    console.log("Form data:", formData);
    ToastAndroid.show("Signup completed successfully", ToastAndroid.SHORT);
    setTimeout(() => {
      router.push("./loginScreen");
    }, 100);
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
              <TextInput
                style={styles.input}
                value={formData.password}
                onChangeText={(text) => handleChange("password", text)}
                secureTextEntry
                returnKeyType="next"
                onSubmitEditing={() => confirmPasswordRef.current?.focus()}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Confirm Password</Text>
              <TextInput
                ref={confirmPasswordRef}
                style={styles.input}
                value={formData.confirmPassword}
                onChangeText={(text) => handleChange("confirmPassword", text)}
                secureTextEntry
                returnKeyType="done"
                onSubmitEditing={handleSubmit}
              />
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
    marginBottom: 15,
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
  },
  progressFill: {
    width: 330,
    height: "100%",
    backgroundColor: "#FFFFFF",
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
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    paddingVertical: 8,
    fontSize: 16,
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
