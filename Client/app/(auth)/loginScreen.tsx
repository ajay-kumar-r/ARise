import React, { useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

interface FormData {
  email: string;
  password: string;
}

export default function LoginScreen() {
  const router = useRouter();
  const [formData, setFormData] = React.useState<FormData>({
    email: "",
    password: "",
  });

  const passwordRef = useRef<TextInput>(null);

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSignUp = () => {
    router.replace("/(auth)/signup1");
  };

  const handleUserValidation = () => {
    router.replace("/(tabs)/home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <TouchableOpacity
        onPress={() => router.replace("../greeting")}
        style={styles.backButton}
      >
        <Ionicons name="arrow-back" size={24} color="#1D1B20" />
      </TouchableOpacity>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
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
          <ScrollView contentContainerStyle={styles.scrollView}>
            <Text style={styles.loginTitle}>Login</Text>
            <Text style={styles.loginSubtitle}>
              Please enter your credentials
            </Text>

            <View>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                style={styles.input}
                value={formData.email}
                onChangeText={(text) => handleChange("email", text)}
                onSubmitEditing={() => passwordRef.current?.focus()}
                keyboardType="email-address"
                autoCapitalize="none"
                returnKeyType="next"
                placeholder=""
              />
            </View>
            <View>
              <Text style={styles.inputLabel}>Password</Text>
              <TextInput
                ref={passwordRef}
                style={styles.input}
                value={formData.password}
                onChangeText={(text) => handleChange("password", text)}
                secureTextEntry
                returnKeyType="done"
                placeholder=""
              />
            </View>

            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Forget Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton}>
              <Text
                style={styles.loginButtonText}
                onPress={handleUserValidation}
              >
                Login
              </Text>
            </TouchableOpacity>

            <Text style={styles.signupText}>
              Don't have an account?
              <Text style={styles.signupLink} onPress={handleSignUp}>
                {" "}
                Sign up
              </Text>
            </Text>
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
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 10,
  },
  header: {
    flexDirection: "row",
    padding: 20,
    paddingTop: 80,
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
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
    paddingTop: 30,
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
  scrollView: {
    flexGrow: 1,
  },
  inputLabel: {
    fontSize: 14,
    color: "#0000005C",
    fontFamily: "Poppins-Regular",
  },
});
