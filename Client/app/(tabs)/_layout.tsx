import { Tabs, usePathname } from 'expo-router';
import BottomBar from '@/components/BottomBar';

export default function TabLayout() {
  const pathname = usePathname();

  return (
    <>
      <Tabs screenOptions={{ headerShown: false, tabBarStyle: { display: 'none' } }} />
      {pathname !== '/greeting' && <BottomBar />}
    </>
  );
}
