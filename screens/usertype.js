import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function UserTypeScreen({ navigation }) {
  //const { navigatee } = this.props.navigation;
  const pressHandler1 = () => {
    navigation.navigate("PSignup");
  };
  const pressHandler2 = () => {
    navigation.navigate("DSignup");
  };
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Select User Type</Text>
      <Button style={styles.marg} title="Passenger" onPress={pressHandler1} />
      <Button style={styles.marg} title="Driver" onPress={pressHandler2} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent:'space-around'
  },
  title: {
    fontSize: 30,
  },
  marg: {
    margin: 20,
    padding: 8,
  },
});
