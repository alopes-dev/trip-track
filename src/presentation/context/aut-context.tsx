import React, { createContext, ReactNode, useEffect, useState } from "react";

import * as AuthSession from "expo-auth-session";
import * as AppleAuthentication from "expo-apple-authentication";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthProviderProps = {
  children: ReactNode;
};

type User = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
};

type Params = {
  access_token: string;
};

type AuthorizationResponse = {
  params: Params;
  type: string;
};

type AuthContextData = {
  user: User;
  signInWithGoogle: () => Promise<void>;
  signInWithApple: () => Promise<void>;
  signOut: () => Promise<void>;
  userStorageLoading: boolean;
};

export const AuthContext = createContext({} as AuthContextData);

const userStorageKey = "@tracktrip:user";
export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const [userStorageLoading, setUserStorageLoading] = useState(true);

  async function signInWithGoogle() {
    // try {
    const CLIENT_ID = process.env.CLIENT_ID;
    const REDIRECT_URI = process.env.REDIRECT_URI;

    // const RESPONSE_TYPE = "token";
    // const SCOPE = encodeURI("profile email");

    // const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

    // const { type, params } = (await AuthSession.startAsync({
    //   authUrl,
    // })) as AuthorizationResponse;

    // if (type === "success") {
    //   const response = await fetch(
    //     `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`
    //   );

    // const userInfo = await response.json();

    const userLogged = {
      id: "userInfo.id",
      email: "userInfo.email",
      name: "userInfo.given_name",
      avatar: "userInfo.picture",
    };

    setUser(userLogged);
    // await AsyncStorage.setItem(userStorageKey, JSON.stringify(userLogged));

    // } catch (error) {}
  }

  async function signInWithApple() {
    try {
      const credentials = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });

      if (credentials) {
        const userLogged = {
          id: credentials.user,
          email: credentials.email!,
          name: credentials.fullName!.givenName!,
          avatar: undefined,
        };

        setUser(userLogged);
      }
    } catch (error) {
      // throw new Error(error);
    }
  }

  async function signOut() {
    setUser({} as User);
    await AsyncStorage.removeItem(userStorageKey);
  }

  useEffect(() => {
    async function loadUserStorageData() {
      const userStoraged = await AsyncStorage.getItem(userStorageKey);

      if (userStoraged) {
        const userLogged = JSON.parse(userStoraged);
        setUser(userLogged);
      }
      setUserStorageLoading(false);
    }
    loadUserStorageData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signInWithGoogle,
        signInWithApple,
        signOut,
        userStorageLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
