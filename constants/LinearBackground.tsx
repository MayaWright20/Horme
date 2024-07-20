import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../constants/Colors.ts";

export default function LinearBackground({ children }: { children: any }) {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={[COLORS.ORANGE, COLORS.LIGHT_GREY, COLORS.MEDIUM_BLUE]}
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
