import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const LoginScreen = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const handleSignUp = () => {
    setTimeout(() => {
      router.replace("/(auth)/signup1");
    }, 100);
  };
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <TouchableOpacity onPress={() => router.replace("../greeting")}>
          <Ionicons
            name="arrow-back"
            size={24}
            color="#1D1B20"
            style={{ top: 22, left: 12 }}
          />
        </TouchableOpacity>

        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Text style={styles.headerTitle}>Hello!</Text>
            <Text style={styles.headerSubtitle}>Welcome to ARise</Text>
          </View>

          <Image
            source={require("../../assets/images/desktop.png")}
            style={styles.headerImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.loginTitle}>Login</Text>
          <Text style={styles.loginSubtitle}>
            Please enter your credentials
          </Text>

          <TextInput
            placeholder="Email"
            style={styles.input}
            keyboardType="email-address"
          />
          <TextInput
            placeholder="Password"
            style={styles.input}
            secureTextEntry
          />

          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forget Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>

          <Text style={styles.signupText}>
            Don't have an account?
            <Text style={styles.signupLink} onPress={handleSignUp}>
              {" "}
              Sign up
            </Text>
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F09216",
  },
  header: {
    flexDirection: "row",
    padding: 20,
  },
  headerContent: {
    flexDirection: "column",
    justifyContent: "center",
  },
  headerTitle: {
    color: "white",
    fontSize: 40,
    fontFamily: "Poppins-Bold",
  },
  headerSubtitle: {
    fontFamily: "Play-Regular",
    color: "white",
    fontSize: 20,
  },
  headerImage: {
    width: "60%",
    height: 145,
  },
  formContainer: {
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 35,
    height: "100%",
    marginTop: 8,
  },
  loginTitle: {
    fontSize: 24,
    color: "#B66800",
    fontFamily: "Poppins-Bold",
  },
  loginSubtitle: {
    color: "#000000A6",
    fontFamily: "NanumGothic-Bold",
    marginTop: 8,
    marginBottom: 16,
    fontSize: 13,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    paddingVertical: 8,
    marginBottom: 25,
    fontSize: 16,
  },
  forgotPassword: {
    color: "#F09216",
    textAlign: "right",
    marginBottom: 20,
    fontFamily: "Poppins-SemiBold",
  },
  loginButton: {
    backgroundColor: "#F09216",
    borderRadius: 13,
    paddingVertical: 8,
    alignItems: "center",
    marginTop: 13,
  },
  loginButtonText: {
    color: "#1E1E1EC2",
    fontSize: 18,
    fontFamily: "Poppins-SemiBold",
  },
  signupText: {
    color: "#0000005C",
    textAlign: "center",
    marginTop: 20,
    fontFamily: "Poppins-Regular",
  },
  signupLink: {
    color: "#F09216",
    fontFamily: "Poppins-SemiBold",
  },
});

export default LoginScreen;
