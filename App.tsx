import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import * as Font from "expo-font";
import RootStackNavigator from "./src/Routes/RootStackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import storeConfig from "./src/Redux/store";
import { PersistGate } from "redux-persist/integration/react";
import firebase from "firebase";
import { firebaseConfig } from "./src/utilities/firebaseConfig";

firebase.initializeApp(firebaseConfig);

export default function App() {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    Font.loadAsync({});
    setLoading(false);
  }, []);

  return (
    <Provider store={storeConfig.store}>
      <PersistGate loading={null} persistor={storeConfig.persistor}>
        <NavigationContainer>
          <RootStackNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
