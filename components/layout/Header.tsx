import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { I_HEADER } from "../../types/Types";

export default function Header(props: I_HEADER) {
  return (
    <SafeAreaView>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "400",
  },
  titleWrapper: {
    paddingLeft: 20,
    paddingTop: 10,
  },
});
