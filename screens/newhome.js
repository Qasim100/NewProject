import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { auth } from "../firebase";
export default function NewHomeScreen({ navigation }) {
  //const { navigatee } = this.props.navigation;
  /*
  const pressHandler1 = () => {
    navigation.navigate("Login");
  };
  const pressHandler2 = () => {
    navigation.navigate("UserType");
  };
  */
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          Current User: {auth.currentUser?.email}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",

    justifyContent: "center",
  },
  title: {
    fontSize: 30,
  },
  marg: {
    marginTop: 5,
  },
});
