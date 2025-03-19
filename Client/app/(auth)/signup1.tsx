import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft, ArrowRight } from "lucide-react-native";

const signup1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Personal Details</Text>

        {/* Progress Bar */}
        <View style={styles.progressBar}>
          <View style={styles.progressFill} />
        </View>
      </View>

      {/* Form Section */}
      <View style={styles.formContainer}>
        <Text style={styles.signInTitle}>Sign in to ARise</Text>
        <Text style={styles.signInSubtitle}>
          Please enter your details to proceed
        </Text>

        {/* Input Fields */}
        <TextInput placeholder="First Name" style={styles.input} />
        <TextInput placeholder="Last Name" style={styles.input} />
        <TextInput placeholder="Username" style={styles.input} />
        <TextInput placeholder="Email" style={styles.input} keyboardType="email-address" />

        {/* Next Button */}
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Next</Text>
          <ArrowRight size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    backgroundColor: "#F09216",
    padding: 20,
    paddingTop: 50,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    marginTop: 10,
    fontFamily: "Play-Bold",
  },
  progressBar: {
    height: 5,
    width: "90%",
    backgroundColor: "#E0A868",
    borderRadius: 10,
    marginTop: 10,
    alignSelf: "center",
  },
  progressFill: {
    height: "100%",
    width: "30%", // Adjust progress percentage
    backgroundColor: "white",
    borderRadius: 10,
  },
  formContainer: {
    padding: 24,
    backgroundColor: "white",
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
  },
  signInTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#B66800",
    fontFamily: "Play-Bold",
  },
  signInSubtitle: {
    color: "#000000A6",
    fontSize: 14,
    marginTop: 5,
    marginBottom: 16,
    fontFamily: "Play-Regular",
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
    paddingVertical: 8,
    marginBottom: 16,
    fontSize: 16,
    fontFamily: "Play-Regular",
  },
  nextButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F09216",
    borderRadius: 13,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignSelf: "flex-end",
    marginTop: 20,
  },
  nextButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 5,
    fontFamily: "Play-Bold",
  },
});

export default signup1;
