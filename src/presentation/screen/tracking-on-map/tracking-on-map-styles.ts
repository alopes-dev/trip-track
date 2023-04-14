import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import MapView from "react-native-maps";

type ButtonProps = {
  bordered?: boolean;
};

export const Header = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  position: absolute;

  z-index: 9;

  margin-top: ${getStatusBarHeight() + RFValue(28)}px;
  padding-left: 40px;
  padding-right: 40px;
`;

export const Container = styled.View`
  flex: 1;
`;

export const MapContainer = styled.View`
  padding-top: ${RFValue(10)}px;
  padding-bottom: ${RFValue(10)}px;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  border: 1px solid;
  height: ${RFPercentage(100)}px;
`;

export const MapTitle = styled.Text`
  text-align: center;

  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.bold};

  color: ${({ theme }) => theme.colors.secondary};

  letter-spacing: 2px;

  width: 100%;
`;

export const MapViewContent = styled(MapView)`
  height: ${RFPercentage(100)}px;
  width: ${RFPercentage(100)}px;
`;

export const RouteDetail = styled.View`
  height: ${RFPercentage(40)}px;
  width: 100%;

  bottom: 0;

  border-top-left-radius: 25px;
  border-top-right-radius: 25px;

  position: absolute;

  background: ${({ theme }) => theme.colors.shape};

  padding-top: ${RFValue(20)}px;

  justify-content: space-between;
`;

export const CodeView = styled.View`
  width: 100%;
  height: ${RFValue(60)}px;

  background-color: ${({ theme }) => theme.colors.primary};

  justify-content: center;
  align-items: center;

  margin-top: ${RFValue(20)}px;
`;

export const Code = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.medium};
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

  width: 100%;

  margin-bottom: ${RFValue(16)}px;
  padding: 20px;
`;

export const TrackAvatarContainer = styled.View`
  width: 70px;
  height: 70px;

  border-radius: 35px;

  background-color: #deebf2;

  justify-content: center;
  align-items: center;
`;

export const TrackerAvatar = styled.Image`
  width: 70px;
  height: 70px;

  border-radius: 35px;
`;

export const TrackText = styled.View`
  margin-left: ${RFValue(15)}px;

  justify-content: space-between;
  flex-direction: column;
`;

export const TrackNumber = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.medium};

  margin-bottom: ${RFValue(10)}px;
`;

export const TrackTime = styled.Text`
  font-size: 14px;
  color: #c3c3c3;
`;

export const TrackDescription = styled.Text`
  font-size: 15px;
  color: #c3c3c3;
`;

export const Tracker = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  width: 100%;
`;

export const TrackerAvatarNamed = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const TimerTracker = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  padding: 8px 22px;
`;

export const TrackTimeContainer = styled.View`
  padding-left: 10px;
  padding-top: 10px;
`;
