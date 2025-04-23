"use client";
import { useAuthCallback, useEnokiFlow, useZkLogin } from "@mysten/enoki/react";
import React, { createContext, useState, useContext, useEffect } from "react";

const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
const NETWORK = process.env.NEXT_PUBLIC_NETWORK;

console.log("GOOGLE_CLIENT_ID", GOOGLE_CLIENT_ID);

const UserContext = createContext(undefined);

const UserDetailsInitialValues = {
  provider: "",
  salt: "",
  address: "",
};

export const UserProvider = ({ children }) => {
  const flow = useEnokiFlow();
  const zkLogin = useZkLogin();
  useAuthCallback();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState(UserDetailsInitialValues);

  const login = async () => {
    const authUrl = await flow.createAuthorizationURL({
      provider: "google",
      clientId: GOOGLE_CLIENT_ID,
      redirectUrl: window.location.origin,
      network: NETWORK,
    });
    window.location.href = authUrl;
  };

  const logOut = async () => {
    flow.logout();
    clearStates();
  };

  const clearStates = () => {
    setIsLoggedIn(false);
    setUserDetails(UserDetailsInitialValues);
  };

  useEffect(() => {
    if (zkLogin.address && zkLogin.salt && zkLogin.provider) {
      setUserDetails({
        provider: zkLogin.provider,
        salt: zkLogin.salt,
        address: zkLogin.address,
      });
      setIsLoggedIn(true);
    }
  }, [zkLogin.address, zkLogin.salt, zkLogin.provider]);

  const contextValue = {
    isLoggedIn,
    userDetails,
    login,
    logOut,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export const useLogin = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useLogin must be used within UserProvider");
  }
  return context;
};
