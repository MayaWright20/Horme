import * as React from "react";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabsNavigator from "./navigation/BottomTabsNavigator";

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <BottomTabsNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}
