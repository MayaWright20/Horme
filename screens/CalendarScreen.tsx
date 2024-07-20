import React from "react";
import LinearBackground from "../components/layout/LinearBackground";
import Header from "../components/layout/Header";
import { ScrollView, StyleSheet } from "react-native";
import { COLORS } from "../constants/Colors";

export default function CalendarScreen() {
  return (
    <LinearBackground>
      <Header title="Calendar" />
      <ScrollView style={styles.scrollview}>
        
      </ScrollView>
    </LinearBackground>
  );
}

const styles = StyleSheet.create({
  scrollview: {
    backgroundColor: "white",
    borderBottomColor: COLORS.LIGHT_GREY,
    borderBottomWidth: 1,
  },
});
