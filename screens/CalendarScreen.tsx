import React, { useState } from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";
import LinearBackground from "../components/layout/LinearBackground";
import Header from "../components/layout/Header";
import { ScrollView, StyleSheet } from "react-native";
import { COLORS } from "../constants/Colors";

export default function CalendarScreen() {
  const [selected, setSelected] = useState("");

  return (
    <LinearBackground>
      <Header title="Calendar" />
      <ScrollView style={styles.scrollview}>
        <Calendar
          onDayPress={(day) => {
            setSelected(day.dateString);
          }}
          markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: true,
              selectedTextColor: COLORS.MINT_GREEN,
            },
          }}
        />
      </ScrollView>
    </LinearBackground>
  );
}

const styles = StyleSheet.create({
  scrollview: {
    backgroundColor: COLORS.WHITE,
    borderBottomColor: COLORS.LIGHT_GREY,
    borderBottomWidth: 1,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingTop: 20,
  },
});
