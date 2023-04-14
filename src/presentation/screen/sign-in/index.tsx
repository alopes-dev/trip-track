import React, { useState } from "react";

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
import { Alert } from "react-native";
import { useTheme } from "styled-components";
import { useAuth } from "../../hooks";

export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const auth = useAuth();
  const theme = useTheme();

  async function handleSignInWithGoogle() {
    try {
      setIsLoading(true);
      return await auth.signInWithGoogle();
    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possível conetar a conta google");
      setIsLoading(false);
    }
  }

  // async function handleSignInWithApple() {
  //   try {
  //     setIsLoading(true);
  //     return await signInWithApple();
  //   } catch (error) {
  //     Alert.alert("Não foi possível conetar a conta apple");
  //     setIsLoading(false);
  //   }
  // }

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
          <Button onPress={handleSignInWithGoogle}>
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
