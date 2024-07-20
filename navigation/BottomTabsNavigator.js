import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import { useTheme } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

import CalendarScreen from "../screens/CalendarScreen";
import HomeScreen from "../screens/HomeScreen";

import { COLORS } from "../constants/Colors";

const Tab = createMaterialBottomTabNavigator();

export default function BottomTabsNavigator() {
  const theme = useTheme();
  theme.colors.secondaryContainer = COLORS.MEDIUM_BLUE;

  const getIconColor = (isFocused) => {
    return isFocused ? COLORS.GREEN : COLORS.MEDIUM_GREY;
  };

  return (
    <Tab.Navigator
      barStyle={styles.container}
      activeColor={COLORS.HIGHTLIGHT_DARK_BLUE}
      inactiveColor={COLORS.MEDIUM_GREY}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={({ isfocuse }) => ({
          tabBarLabel: "Calendar",
          tabBarIcon: ({ focused }) => {
            return (
              <AntDesign name="home" size={24} color={getIconColor(focused)} />
            );
          },
        })}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={({ isfocuse }) => ({
          tabBarLabel: "Calendar",
          tabBarIcon: ({ focused }) => {
            return (
              <Feather
                name="calendar"
                size={24}
                color={getIconColor(focused)}
              />
            );
          },
        })}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
  },
});
