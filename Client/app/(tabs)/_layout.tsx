import { Tabs, usePathname } from 'expo-router';

export default function TabLayout() {
  const pathname = usePathname();

  return (
    <>
      <Tabs screenOptions={{ headerShown: false, tabBarStyle: { display: 'none' } }} />
    </>
  );
}
