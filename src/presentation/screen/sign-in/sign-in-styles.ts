import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Header = styled.View`
  width: 100%;
  height: 40%;

  background-color: ${({ theme }) => theme.colors.primary_ligth};

  justify-content: center;
  align-items: center;

  border-radius: 60px;

  padding-top: 40px;
`;

export const FooterWrapper = styled.View`
  width: 100%;
  height: 60%;

  padding-left: 15px;
  padding-right: 15px;

  align-items: center;
  justify-content: space-around;
`;

export const TitleWrapper = styled.View`
  justify-content: center;
  align-items: center;
  width: 85%;
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  text-align: center;

  letter-spacing: 2px;
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  text-align: center;

  padding-top: ${RFValue(20)}px;
  letter-spacing: 2px;
`;

export const SignUpText = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  text-align: center;

  padding-top: ${RFValue(10)}px;
  letter-spacing: 1px;
`;

export const ButtonContainer = styled.View`
  width: 100%;
`;

export const Button = styled(RectButton)`
  height: ${RFValue(56)}px;

  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 32px;

  align-items: center;
  flex-direction: row;

  margin-bottom: 16px;
`;

export const ImageContainer = styled.View`
  position: absolute;
  height: 40px;
  width: 40px;

  border-radius: 20px;

  justify-content: center;
  align-items: center;

  margin-left: ${RFValue(15)}px;

  background-color: ${({ theme }) => theme.colors.shape};
`;

export const ButtonTitle = styled.Text`
  flex: 1;
  text-align: center;

  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;

  color: ${({ theme }) => theme.colors.shape};
`;
