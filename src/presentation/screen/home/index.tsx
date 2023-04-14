import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  Avatar,
  AvatarContainer,
  Button,
  ButtonContainer,
  ButtonTextContainer,
  ButtonTitle,
  Container,
  Header,
  Input,
  NotificationContainer,
  SubTitle,
  Title,
  TitleWrapper,
  TrackContainer,
  UserContainer,
  UserName,
} from "./home-styles";

import { Feather, Ionicons } from "@expo/vector-icons";
import TrackingHistory from "./tracking-history";
import theme from "../../../../global/styles/theme";
import { RFValue } from "react-native-responsive-fontsize";

import BottomSheet from "@gorhom/bottom-sheet";
import { Text, View } from "react-native";
import SearchDestination from "./search-destination";

export default function Home() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [initialSnap, setInitialSnap] = useState<string | number>(40);

  // variables
  const snapPoints = useMemo(() => [initialSnap, "50%"], [initialSnap]);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
    // if (index === 0) {
    //   setInitialSnap(10);
    // }
  }, []);

  const handleOpenSearch = () => {
    setInitialSnap("25%");
  };

  return (
    <Container>
      <Header>
        <AvatarContainer>
          <Avatar
            source={{
              uri: "https://avatars.githubusercontent.com/u/49714406?v=4",
            }}
          />
        </AvatarContainer>
        <NotificationContainer>
          <Feather name="bell" size={24} />
        </NotificationContainer>
      </Header>
      <UserContainer>
        <UserName>Hello, Ivanilson</UserName>
      </UserContainer>

      <TrackContainer>
        <TitleWrapper>
          <Title>Welcome to Trip track</Title>
          <SubTitle>Enter the recipt number thas has</SubTitle>
          <SubTitle>given by the officer</SubTitle>
        </TitleWrapper>

        <ButtonContainer>
          <Input placeholder="Enter the recip number" />
          <Button>
            <ButtonTextContainer>
              <ButtonTitle>Track now</ButtonTitle>
              <Ionicons name="arrow-forward-outline" color={"#fff"} size={24} />
            </ButtonTextContainer>
          </Button>
        </ButtonContainer>
      </TrackContainer>

      <TrackingHistory />

      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        handleIndicatorStyle={{
          backgroundColor: theme.colors.secondary,
          width: 50,
        }}
        backgroundStyle={{
          elevation: 3,
          backgroundColor: "#f1f7fb",
        }}
      >
        <SearchDestination />
      </BottomSheet>
    </Container>
  );
}
