import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeftIcon } from "lucide-react-native";
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
    <View style={styles.container}>
      {/* Header Section */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <ArrowLeftIcon size={28} color="black" style={{ top: 22, left: 12 }} />
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

      {/* Login Form */}
      <View style={styles.formContainer}>
        <Text style={styles.loginTitle}>Login</Text>
        <Text style={styles.loginSubtitle}>Please enter your credentials</Text>

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
    fontFamily: "Poppins-SemiBold",
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
    fontWeight: "bold",
    color: "#B66800",
  },
  loginSubtitle: {
    color: "#000000A6",
    fontWeight: 700,
    marginTop: 8,
    marginBottom: 16,
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
    fontWeight: 500,
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
    fontWeight: "bold",
  },
  signupText: {
    color: "#0000005C",
    textAlign: "center",
    marginTop: 20,
  },
  signupLink: {
    color: "#F09216",
    fontWeight: "bold",
  },
});

export default LoginScreen;
