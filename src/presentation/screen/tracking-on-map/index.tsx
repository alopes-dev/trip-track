import React, { useEffect, useRef, useState } from "react";
import {
  Header,
  MapContainer,
  MapViewContent,
  Container,
  RouteDetail,
  CodeView,
  Code,
  TrackAvatarContainer,
  TrackDescription,
  Tracker,
  TrackerAvatar,
  TrackingList,
  TrackNumber,
  TrackText,
  TrackerAvatarNamed,
  TrackTime,
  TimerTracker,
  TrackTimeContainer,
  MapTitle,
} from "./tracking-on-map-styles";

import { Feather, Ionicons } from "@expo/vector-icons";

import MapView, { Marker } from "react-native-maps";
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  Dimensions,
} from "react-native";
import {
  getCurrentPositionAsync,
  LocationAccuracy,
  LocationObject,
  requestForegroundPermissionsAsync,
  watchPositionAsync,
} from "expo-location";
import {
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import MapViewDirections, {
  MapDirectionsResponse,
} from "react-native-maps-directions";
import theme from "../../../../global/styles/theme";
import {
  cleanDistance,
  converter,
  GOOGLE_MAPS_APIKEY,
} from "../../utils/config";

const { height, width } = Dimensions.get("window");

type Coords = {
  lat: number;
  lng: number;
};
type Params = {
  code: string;
  coords: Coords;
};

const edgePadding = {
  right: 50,
  bottom: 50,
  left: 50,
  top: 50,
};

export default function TrackingOnMap() {
  const [location, setLocation] = useState<LocationObject | null>(null);
  const { goBack } = useNavigation();
  const { params } = useRoute<RouteProp<{ params: Params }>>();
  const mapRef = useRef<MapView>(null);
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);

  async function requestLocationPermissions() {
    const { granted } = await requestForegroundPermissionsAsync();

    if (granted) {
      const currentPosition = await getCurrentPositionAsync({});
      setLocation(currentPosition);
    }
  }

  useEffect(() => {
    requestLocationPermissions();
  }, []);

  useEffect(() => {
    watchPositionAsync(
      {
        accuracy: LocationAccuracy.Highest,
        timeInterval: 1000,
        distanceInterval: 1,
      },
      (response) => {
        setLocation(response);
        mapRef.current?.animateCamera({
          center: location?.coords,
        });
      }
    );
  }, []);

  function handleReady(result: MapDirectionsResponse) {
    setDistance(result.distance);
    setDuration(result.duration);

    mapRef.current.fitToCoordinates(result.coordinates, {
      edgePadding,
    });
  }

  useEffect(() => {
    if (!location?.coords || !params?.coords) return;

    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding,
    });
  }, [location?.coords, params?.coords]);

  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <Header>
        <RectButton onPress={goBack}>
          <Ionicons name="chevron-back-outline" color={"#000"} size={28} />
        </RectButton>
        <MapTitle>Tracking Details</MapTitle>
      </Header>
      <MapContainer>
        {!location && <ActivityIndicator size={"large"} />}
        {location && (
          <MapViewContent
            ref={mapRef}
            initialRegion={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}
            mapType="mutedStandard"
            loadingEnabled
            showsUserLocation
          >
            <MapViewDirections
              // mode="DRIVING"
              strokeWidth={5}
              strokeColor={theme.colors.primary}
              origin={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
              optimizeWaypoints={true}
              destination={{
                latitude: params?.coords?.lat,
                longitude: params?.coords?.lng,
              }}
              apikey={GOOGLE_MAPS_APIKEY}
              onReady={handleReady}
              onError={(error) => {
                console.log(error);
              }}
            />
            <Marker
              coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
              title={"Origin"}
              description={"marker.description"}
              identifier="origin"
            />
            <Marker
              coordinate={{
                latitude: params?.coords?.lat,
                longitude: params?.coords?.lng,
              }}
              title={"Destination"}
              description={"marker.description"}
              identifier="destination"
            />
          </MapViewContent>
        )}
      </MapContainer>

      <RouteDetail style={styles.route}>
        <CodeView>
          <Code>{params?.code}</Code>
        </CodeView>

        <TimerTracker>
          <TrackTimeContainer>
            <TrackTime style={{ marginBottom: 8, fontSize: 16 }}>
              Courier arrives in
            </TrackTime>
            <Code>{converter(Number(duration.toFixed(0)))}</Code>
          </TrackTimeContainer>
          <TrackTimeContainer>
            <TrackTime style={{ marginBottom: 8, fontSize: 16 }}>
              Distância
            </TrackTime>
            <Code>{cleanDistance(distance)}km</Code>
          </TrackTimeContainer>
        </TimerTracker>

        <TrackingList>
          <Tracker>
            <TrackerAvatarNamed>
              <TrackAvatarContainer>
                <TrackerAvatar
                  source={{
                    uri: "https://avatars.githubusercontent.com/u/49714406?v=4",
                  }}
                />
              </TrackAvatarContainer>
              <TrackText>
                <TrackNumber>In Delivery</TrackNumber>
                <TrackDescription>Lobito, Benguela</TrackDescription>
              </TrackText>
            </TrackerAvatarNamed>
            <TrackTime>03:20 PM</TrackTime>
          </Tracker>
        </TrackingList>
      </RouteDetail>
    </Container>
  );
}

const styles = StyleSheet.create({
  route: {
    shadowColor: "#3333",
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
});
