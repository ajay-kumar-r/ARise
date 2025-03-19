import { useEffect, useState } from "react";
import { useRouter, useRootNavigationState } from "expo-router";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import * as Font from "expo-font";

export default function IndexScreen() {
  const router = useRouter();
  const navigationState = useRootNavigationState();
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // Load fonts before navigating
  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        "Play-Regular": require("../assets/fonts/Play-Regular.ttf"),
        "Play-Bold": require("../assets/fonts/Play-Bold.ttf"),
        "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
        "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
        "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
        "NanumGothic-Regular": require("../assets/fonts/NanumGothic-Regular.ttf"),
        "NanumGothic-Bold": require("../assets/fonts/NanumGothic-Bold.ttf"),
        "NanumGothic-ExtraBold": require("../assets/fonts/NanumGothic-ExtraBold.ttf"),
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  // Navigate only after fonts are loaded
  useEffect(() => {
    if (navigationState?.key && fontsLoaded) {
      router.replace("/greeting");
    }
  }, [navigationState, fontsLoaded]);

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#FFA500" />
      </View>
    );
  }

  return null; // Prevents rendering anything if fonts aren't loaded
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
