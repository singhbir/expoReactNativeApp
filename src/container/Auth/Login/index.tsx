import React from "react";
import { Text, View, StyleSheet, Platform } from "react-native";
import * as Google from "expo-google-app-auth";
import { ANDROID_CLIENT_ID } from "../../../env";
import { THEME_BLUE, WHITE } from "../../../constant/color";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native-gesture-handler";
import EnvelopMan from "../../../Icons/Login/EnvelopMan";

const index = () => {
  async function signInWithGoogleAsync() {
    try {
      const result = await Google.logInAsync({
        clientId: ANDROID_CLIENT_ID,
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        console.log(result);
      } else {
        console.log(result);
      }
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <EnvelopMan />
        <Text style={styles.text_header}>COMPLIENT BOX</Text>
        <Text style={styles.btnText}>developed by BIR</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.center}>
          <TouchableOpacity onPress={signInWithGoogleAsync}>
            <View style={styles.btnstyle}>
              <Text style={styles.btnText}>LOGIN</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME_BLUE,
  },
  btnstyle: {
    backgroundColor: THEME_BLUE,
    height: 200,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  btnText: {
    color: WHITE,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 50,
    marginTop: 20,
  },
  footer: {
    flex: 2,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 10,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
