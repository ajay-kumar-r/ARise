import { Stack, usePathname } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { PaperProvider } from 'react-native-paper';
import TopBar from '@/components/TopBar';
import { theme } from '../theme';
import { View, StyleSheet } from 'react-native';

export default function RootLayout() {
  const pathname = usePathname();

  const hideTopBarPaths = [
    '/',
    '/loginScreen',
    '/signup1',
    '/signup2',
    '/signup3',
    '/ProfileScreen',
    '/chatbot',
    ,'/leads',
  ];

  return (
    <PaperProvider theme={theme}>
      <StatusBar style="light" />
      
      <View style={styles.container}>
        {!hideTopBarPaths.includes(pathname) && <TopBar />}
        
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative', 
  },
});
