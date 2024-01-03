import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import masterStyles from "../../styles/masterStyles";
import Router from "./Router";
import { navigationRef } from "../../services/NavigationServices";

if (__DEV__) {
  import("../../utils/ReactotronConfig").then(() => console.log("Reactotron Configured"));
}

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Router />
    </NavigationContainer>
  );
};

export default App;
