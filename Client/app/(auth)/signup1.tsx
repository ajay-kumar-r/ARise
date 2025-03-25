import React, { useState, useRef, useEffect } from "react";
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
  firstName: string;
  lastName: string;
  username: string;
  email: string;
}

export default function Signup1() {
  const router = useRouter();
  const { formData, setFormData } = useForm();

  const lastNameRef = useRef<TextInput>(null);
  const usernameRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleNext = () => {
    if (
      formData.firstName === "" ||
      formData.lastName === "" ||
      formData.username === "" ||
      formData.email === ""
    ) {
      ToastAndroid.show("Please fill in all fields", ToastAndroid.SHORT);
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      ToastAndroid.show(
        "Please enter a valid email address",
        ToastAndroid.SHORT
      );
      return;
    }
    console.log("Form data:", formData);
    router.push("./signup2");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.push("./loginScreen")}
        >
          <Ionicons name="arrow-back" size={24} color="#1D1B20" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Personal Details</Text>
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

            {/* First Name Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>First Name</Text>
              <TextInput
                style={styles.input}
                value={formData.firstName}
                onChangeText={(text) => handleChange("firstName", text)}
                returnKeyType="next"
                onSubmitEditing={() => lastNameRef.current?.focus()}
                placeholder=""
              />
            </View>

            {/* Last Name Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Last Name</Text>
              <TextInput
                ref={lastNameRef}
                style={styles.input}
                value={formData.lastName}
                onChangeText={(text) => handleChange("lastName", text)}
                returnKeyType="next"
                onSubmitEditing={() => usernameRef.current?.focus()}
                placeholder=""
              />
            </View>

            {/* Username Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Username</Text>
              <TextInput
                ref={usernameRef}
                style={styles.input}
                value={formData.username}
                onChangeText={(text) => handleChange("username", text)}
                returnKeyType="next"
                onSubmitEditing={() => emailRef.current?.focus()}
                placeholder=""
              />
            </View>

            {/* Email Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                ref={emailRef}
                style={styles.input}
                value={formData.email}
                onChangeText={(text) => handleChange("email", text)}
                keyboardType="email-address"
                autoCapitalize="none"
                returnKeyType="done"
                onSubmitEditing={handleNext}
                placeholder=""
              />
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                <Text style={styles.nextButtonText}>Next</Text>
                <Ionicons name="arrow-forward" size={16} color="#1E1E1E" />
              </TouchableOpacity>
            </View>
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
  },
  progressFill: {
    width: 110,
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 20,
  },
  nextButton: {
    backgroundColor: "#F09216",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  nextButtonText: {
    color: "#1E1E1E",
    marginRight: 5,
    fontFamily: "Poppins-SemiBold",
  },
});
