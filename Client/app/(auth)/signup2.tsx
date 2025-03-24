import React, { useRef, useEffect } from "react";
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
  branch: string;
  course: string;
  yearOfStudy: string;
}

export default function Signup2() {
  const router = useRouter();
  const { formData, setFormData } = useForm();

  const branchRef = useRef<TextInput>(null);
  const yearOfStudyRef = useRef<TextInput>(null);

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleNext = () => {
    if (
      formData.branch === "" ||
      formData.course === "" ||
      formData.yearOfStudy === ""
    ) {
      ToastAndroid.show("Please fill in all fields", ToastAndroid.SHORT);
      return;
    }
    const year = parseInt(formData.yearOfStudy);
    if (isNaN(year) || year < 1 || year > 5) {
      ToastAndroid.show(
        "Please enter a valid year of study (1-5)",
        ToastAndroid.SHORT
      );
      return;
    }
    console.log("Form data:", formData);
    router.push("./signup3");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.push("./signup1")}
        >
          <Ionicons name="arrow-back" size={24} color="#1D1B20" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Educational Details</Text>
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

            {/* Course Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Course</Text>
              <TextInput
                style={styles.input}
                value={formData.course}
                onChangeText={(text) => handleChange("course", text)}
                returnKeyType="next"
                onSubmitEditing={() => branchRef.current?.focus()}
                placeholder=""
              />
            </View>

            {/* Branch Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Branch</Text>
              <TextInput
                ref={branchRef}
                style={styles.input}
                value={formData.branch}
                onChangeText={(text) => handleChange("branch", text)}
                returnKeyType="next"
                onSubmitEditing={() => yearOfStudyRef.current?.focus()}
                placeholder=""
              />
            </View>

            {/* Year of Study Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Year of Study</Text>
              <TextInput
                ref={yearOfStudyRef}
                style={styles.input}
                value={formData.yearOfStudy}
                onChangeText={(text) => handleChange("yearOfStudy", text)}
                placeholder=""
                keyboardType="number-pad"
                maxLength={1}
                returnKeyType="done"
                onSubmitEditing={handleNext}
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
