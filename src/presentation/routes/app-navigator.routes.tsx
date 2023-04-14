import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { Home, TrackingOnMap } from "../screen";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppNavigatorRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarLabelPosition: "beside-icon",
        tabBarStyle: {
          height: 88,
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
          backgroundColor: "#f1f7fb",
        },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="cadastrar"
        component={TrackingOnMap}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="receipt-outline" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="cadastrars"
        component={Home}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ size, color }) => (
            <Feather name="message-circle" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="Resumo"
        component={Home}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="settings-outline" color={color} size={size} />
          ),
        }}
      />
    </Navigator>
  );
}
