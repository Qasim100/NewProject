import React from "react";
import { StyleSheet, Text, View, Button,TextInput } from "react-native";

export default function VehicleDetailsScreen({ navigation }) {
  //const { navigate } = this.props.navigation;
 
  const pressHandler2 = () => {
    navigation.navigate("OTP");
  };
  return (
    <View style={styles.container}>
      
      <Text style={styles.marg}>Vehicle Name </Text>
      <TextInput style={styles.input} id='vname'/>
      <Text style={styles.marg}>Vehicle Type </Text>
      <TextInput style={styles.input} id='vtype'/>
      <Text style={styles.marg}>Vehicle Chassis No </Text>
      <TextInput style={styles.input} id='vchassis'/>
      <Text style={styles.marg}>Vehicle Model </Text>
      <TextInput style={styles.input} id='vmodel'/>
      <Text style={styles.marg}>Vehicle Registration No </Text>
      <TextInput style={styles.input} id='vreg'/>
      
      <Button title="Next" onPress={pressHandler2} />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  title: {
    fontSize: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 3,
    margin: 7,
    width: 200,
  },
  marg: {
    margin: 10,
  },
});
