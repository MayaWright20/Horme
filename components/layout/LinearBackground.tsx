import React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../../constants/Colors.ts";

export default function LinearBackground({ children }: { children: any }) {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={[COLORS.MEDIUM_BLUE, COLORS.MINT_GREEN, COLORS.MEDIUM_BLUE]}
      style={styles.linearGradient}
    >
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});
