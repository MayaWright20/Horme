import React, { useState } from "react";
import { CalendarList } from "react-native-calendars";
import LinearBackground from "../components/layout/LinearBackground";
import Header from "../components/layout/Header";
import { StyleSheet } from "react-native";
import { COLORS } from "../constants/Colors";

export default function CalendarScreen() {
  const [selected, setSelected] = useState("");

  return (
    <LinearBackground>
      <Header title="Calendar" />
        <CalendarList
        style={styles.calendar}
          pastScrollRange={12}
          futureScrollRange={12}
          onDayPress={(day) => {
            setSelected(day.dateString);
          }}
          markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: false,
              selectedTextColor: COLORS.MINT_GREEN,
            },
          }}
        />
    </LinearBackground>
  );
}

const styles = StyleSheet.create({
  calendar: {
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingTop: 20,
  },
});
