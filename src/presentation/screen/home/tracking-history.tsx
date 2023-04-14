import React from "react";
import {
  TrackAvatarContainer,
  TrackDescription,
  Tracker,
  TrackerAvatar,
  TrackingContainer,
  TrackingList,
  TrackNumber,
  TrackText,
  TrackTitle,
} from "./home-styles";

import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import theme from "../../../../global/styles/theme";
import { useNavigation } from "@react-navigation/native";

export default function TrackingHistory() {
  const { navigate } = useNavigation();

  const handleNavigation = (code: string) => {
    navigate("Map", { code });
  };
  return (
    <TrackingContainer>
      <TrackTitle>Tracking history</TrackTitle>

      <TrackingList onPress={() => handleNavigation("SCR-1231231")}>
        <Tracker>
          <TrackAvatarContainer>
            <TrackerAvatar
              source={{
                uri: "https://avatars.githubusercontent.com/u/49714406?v=4",
              }}
            />
          </TrackAvatarContainer>
          <TrackText>
            <TrackNumber>SCR-1231231</TrackNumber>
            <TrackDescription>Order on the search</TrackDescription>
          </TrackText>
        </Tracker>
        <Ionicons
          name="chevron-forward-outline"
          color={theme.colors.secondary}
          size={24}
        />
      </TrackingList>
      <TrackingList>
        <Tracker>
          <TrackAvatarContainer>
            <TrackerAvatar
              source={{
                uri: "https://avatars.githubusercontent.com/u/49714406?v=4",
              }}
            />
          </TrackAvatarContainer>
          <TrackText>
            <TrackNumber>SCR-1231231</TrackNumber>
            <TrackDescription>In delivery</TrackDescription>
          </TrackText>
        </Tracker>
        <Ionicons
          name="chevron-forward-outline"
          color={theme.colors.secondary}
          size={24}
        />
      </TrackingList>
    </TrackingContainer>
  );
}
