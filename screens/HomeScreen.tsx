import React from "react";
import { Text } from "react-native";
import LinearBackground from "../constants/LinearBackground";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <LinearBackground>
      <SafeAreaView>
        <Text>HomeScreen</Text>
      </SafeAreaView>
    </LinearBackground>
  );
}
