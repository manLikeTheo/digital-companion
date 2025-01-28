import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { Redirect, Tabs } from "expo-router";
export default function Home() {
  const [loggedInUser, setLoggedInUser] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const subscription = async () => {
      const token = SecureStore.getItem("accessToken");
      // console.log(token);

      setLoggedInUser(token ? true : false);
    };
    subscription();
  }, []);

  return (
    <>
      {loading ? (
        <></>
      ) : (
        <Redirect href={!loggedInUser ? "/(routes)/onboarding" : "/(tabs)"} />
      )}
    </>
  );
}
