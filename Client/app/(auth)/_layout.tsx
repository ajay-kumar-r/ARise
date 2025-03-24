import { Tabs, usePathname } from "expo-router";
import BottomBar from "@/components/BottomBar";
import { FormProvider } from "./formContext"; // Ensure the correct import path

export default function TabLayout() {
  const pathname = usePathname();

  return (
    <FormProvider>
      <Tabs
        screenOptions={{ headerShown: false, tabBarStyle: { display: "none" } }}
      />
      {/* {pathname !== "/loginScreen" && pathname !== "/signup1" && pathname !== "/signup2"  && pathname !== "/signup3" && <BottomBar />} */}
    </FormProvider>
  );
}
