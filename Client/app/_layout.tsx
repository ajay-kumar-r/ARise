import { Stack, usePathname } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { PaperProvider } from 'react-native-paper';
import TopBar from '@/components/TopBar';
import { theme } from '../theme';

export default function RootLayout() {
  const pathname = usePathname();
 
  return (
    <PaperProvider theme={theme}>
      <StatusBar style="light" />

      {pathname !== '/greeting' && pathname !== '/loginScreen' && pathname !== '/signup1' && pathname !== '/signup2' && pathname !== '/signup3'  && pathname !== '/ProfileScreen' && pathname!=='/chatbot' && <TopBar />}

      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="greeting" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </PaperProvider>
  );
}
