import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function DriverSignupScreen({ navigation }) {
  //const { navigate } = this.props.navigation;

  const pressHandler2 = () => {
    navigation.navigate("VehicleDetails");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Driver Signup</Text>
      <Text style={styles.marg}>Enter Full Name </Text>
      <TextInput style={styles.input} id="drname" />
      <Text style={styles.marg}>Enter Password </Text>
      <TextInput style={styles.input} secureTextEntry={true} id="drpasswrd" />
      <Text style={styles.marg}>Confirm Password </Text>
      <TextInput style={styles.input} secureTextEntry={true} id="drpasswrd2" />
      <Text style={styles.marg}>Enter Email </Text>
      <TextInput style={styles.input} id="dremail" />
      <Text style={styles.marg}>Enter Phone Number </Text>
      <TextInput style={styles.input} id="drnumber" />
      <Text style={styles.marg}>Enter CNIC </Text>
      <TextInput style={styles.input} id="drcnic" />
      <TouchableOpacity>
        <Button title="Next" onPress={pressHandler2} />
      </TouchableOpacity>
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
  padd: {
    padding: 10,
  },
});
