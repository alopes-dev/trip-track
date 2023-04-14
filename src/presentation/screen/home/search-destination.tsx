import { View, Text, KeyboardAvoidingView, Platform } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "../../utils/config";
import { SearchContainer } from "./home-styles";
import { useNavigation } from "@react-navigation/native";

export default function SearchDestination() {
  const { navigate } = useNavigation();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SearchContainer>
        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details = null) => {
            navigate("Map", {
              code: "XXXX-XXXX",
              coords: details.geometry.location,
            });
          }}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "pt-BR",
            // components: "country:us",
            components: "country:ao",
          }}
          keepResultsAfterBlur
          enablePoweredByContainer={false}
          fetchDetails={true}
          styles={{ container: { flex: 0 } }}
          onFail={(data) => {
            console.log(data);
          }}
        />
      </SearchContainer>
    </KeyboardAvoidingView>
  );
}
