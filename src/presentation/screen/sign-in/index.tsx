import React, { useState } from "react";
import { ActivityIndicator, Platform, Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";

import RoadTrip from "../../assets/map_tracking.svg";
import GoogleSvg from "../../assets/google.svg";

import {
  Container,
  Header,
  FooterWrapper,
  TitleWrapper,
  Title,
  SubTitle,
  Button,
  ButtonTitle,
  ImageContainer,
  SignUpText,
  ButtonContainer,
} from "./sign-in-styles";

export function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const theme = useTheme();

  return (
    <Container>
      <Header>
        <RoadTrip width={"100%"} height={260} />
      </Header>
      <FooterWrapper>
        <TitleWrapper>
          <Title>Welcome to Trip track</Title>
          <SubTitle>
            Track your friend and make sure he arrives to destination
          </SubTitle>
        </TitleWrapper>

        <ButtonContainer>
          <Button>
            <ImageContainer>
              <GoogleSvg />
            </ImageContainer>
            <ButtonTitle>Login with google</ButtonTitle>
          </Button>
          <SignUpText>Don't have any account?</SignUpText>
        </ButtonContainer>
      </FooterWrapper>
    </Container>
  );
}
