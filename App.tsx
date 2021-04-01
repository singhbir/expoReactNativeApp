import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import * as Font from "expo-font";
import RootStackNavigator from "./src/Routes/RootStackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import storeConfig from "./src/Redux/store";

export default function App() {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    Font.loadAsync({});
    setLoading(false);
  }, []);

  return (
    <Provider store={storeConfig.store}>
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </Provider>
  );
}
