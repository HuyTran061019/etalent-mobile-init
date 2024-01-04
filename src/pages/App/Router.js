import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeName, LoginName } from "../../constants/ScreenNames";
import HomePage from "../Home";
import LoginPage from "../Login";

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
    >
      <Stack.Screen name={LoginName} component={LoginPage}/>
      <Stack.Screen name={HomeName} component={HomePage} />
    </Stack.Navigator>
  );
};

export default Router;
