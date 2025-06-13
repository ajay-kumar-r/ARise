import { Stack, usePathname } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { PaperProvider } from 'react-native-paper';
import TopBar from '@/components/TopBar';
import { theme } from '../theme';

export default function RootLayout() {
  const pathname = usePathname();

  // Paths where TopBar should not appear
  const hideTopBarPaths = [
    '/',
    '/loginScreen',
    '/signup1',
    '/signup2',
    '/signup3',
    '/ProfileScreen',
    '/chatbot',
  ];

  return (
    <PaperProvider theme={theme}>
      <StatusBar style="light" />
      
      {!hideTopBarPaths.includes(pathname) && <TopBar />}

      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </PaperProvider>
  );
}
