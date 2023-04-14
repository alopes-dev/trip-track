import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { useAuth } from "../hooks";

export function Routes() {
  const { user } = useAuth();

  const isLoged = !!user?.id;

  return (
    <NavigationContainer>
      {isLoged ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
