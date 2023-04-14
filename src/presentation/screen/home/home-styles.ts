import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import theme from "../../../../global/styles/theme";

type ButtonProps = {
  bordered?: boolean;
};

export const Container = styled.View`
  flex: 1;
  padding-left: ${RFValue(20)}px;
  padding-right: ${RFValue(20)}px;

  background-color: ${({ theme }) => theme.colors.shape};
`;

export const Header = styled.View`
  margin-top: ${getStatusBarHeight() + RFValue(28)}px;
  padding-top: ${RFValue(10)}px;
  padding-bottom: ${RFValue(10)}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const AvatarContainer = styled.View`
  width: 50px;
  height: 50px;

  border-radius: 25px;

  background-color: ${({ theme }) => theme.colors.primary_dark};

  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 43px;
  height: 43px;

  border-radius: 21.5px;
`;

export const NotificationContainer = styled.View`
  background-color: #deebf2;

  width: 35px;
  height: 35px;

  border-radius: 8px;

  justify-content: center;
  align-items: center;
`;

export const UserContainer = styled.View`
  margin-top: ${RFValue(15)}px;
`;

export const UserName = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.bold};

  color: ${({ theme }) => theme.colors.secondary};
`;

export const TrackContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};

  height: ${RFPercentage(40)}px;

  margin-top: ${RFValue(15)}px;
  margin-bottom: ${RFValue(15)}px;

  padding-top: ${RFValue(30)}px;

  border-radius: 20px;

  align-items: center;
`;

export const TitleWrapper = styled.View`
  justify-content: center;
  align-items: flex-start;
`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.bold};

  color: ${({ theme }) => theme.colors.secondary};

  letter-spacing: 2px;

  margin-bottom: ${RFValue(10)}px;
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(12)}px;

  color: ${({ theme }) => theme.colors.secondary};

  letter-spacing: 2px;
`;

export const ButtonContainer = styled.View`
  width: 84%;

  margin-top: ${RFValue(30)}px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: theme.colors.secondary,
})`
  height: ${RFValue(46)}px;

  border-radius: 26px;

  align-items: center;
  text-align: center;
  justify-content: center;
  flex-direction: row;

  margin-bottom: 16px;

  padding-left: 20px;
  padding-right: 20px;

  border: 1px solid ${({ theme }) => theme.colors.secondary};
`;

export const Button = styled(RectButton)<ButtonProps>`
  height: ${RFValue(46)}px;

  border-radius: 26px;

  align-items: center;
  justify-content: center;
  flex-direction: row;

  margin-bottom: 16px;

  ${({ bordered }) =>
    bordered &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.secondary};
    `}

  ${({ bordered }) =>
    !bordered &&
    css`
      background-color: ${({ theme }) => theme.colors.secondary};
    `}
`;

export const ButtonTextContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${RFValue(120)}px;
`;

export const ButtonTitle = styled.Text<ButtonProps>`
  flex: 1;
  text-align: center;

  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;

  color: ${({ theme, bordered }) =>
    bordered ? theme.colors.secondary : theme.colors.shape};

  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const TrackingContainer = styled.View`
  flex: 1;
`;

export const TrackTitle = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.medium};

  margin-bottom: ${RFValue(16)}px; ;
`;

export const TrackingList = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: ${RFValue(16)}px; ;
`;

export const TrackAvatarContainer = styled.View`
  width: 50px;
  height: 50px;

  border-radius: 25px;

  background-color: #deebf2;

  justify-content: center;
  align-items: center;
`;

export const TrackerAvatar = styled.Image`
  width: 38px;
  height: 38px;

  border-radius: 19px;
`;

export const TrackText = styled.View`
  margin-left: ${RFValue(15)}px;
`;

export const TrackNumber = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.medium};

  margin-bottom: ${RFValue(2)}px;
`;

export const TrackDescription = styled.Text`
  font-size: 12px;
  color: #c3c3c3;
`;

export const Tracker = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const SearchContainer = styled.View`
  padding: 20px;
`;
