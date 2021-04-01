import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../container/Auth/Login";

const Stack = createStackNavigator();

const RootStackNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Signin" component={Login} />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
