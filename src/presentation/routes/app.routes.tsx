import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { Home, TrackingOnMap } from "../screen";
import { createStackNavigator } from "@react-navigation/stack";
import { AppNavigatorRoutes } from "./app-navigator.routes";

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  const theme = useTheme();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Main" component={AppNavigatorRoutes} />
      <Screen name="Map" component={TrackingOnMap} />
    </Navigator>
  );
}
