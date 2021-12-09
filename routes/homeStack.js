import { createStackNavigator } from "react-navigation-stack";

import { createAppContainer } from "react-navigation";
import home from "../screens/home";
import login from "../screens/login";
import psignup from "../screens/psignup";
import resetpass from "../screens/resetpass";
import forgotpassword from "../screens/forgotpassword";
import usertype from "../screens/usertype";
import dsignup from "../screens/dsignup";
import vehicledetails from "../screens/vehicledetails";
import otp from "../screens/otp";
import newhome from "../screens/newhome";
const screens = {
  Home: {
    screen: home,
    navigationOptions: {
      title: "Lift On Your Way",
      headerStyle: { backgroundColor: "#f0fff0" },
    },
  },
  Login: {
    screen: login,
    navigationOptions: {
      headerStyle: { backgroundColor: "#add8e6" },
    },
  },
  PSignup: {
    screen: psignup,
    navigationOptions: {
      headerStyle: { backgroundColor: "#98fb98" },
    },
  },
  ResetPass: {
    screen: resetpass,
    navigationOptions: {
      headerStyle: { backgroundColor: "#f0fff0" },
    },
  },
  ForgotPass: {
    screen: forgotpassword,
    navigationOptions: {
      headerStyle: { backgroundColor: "#f0fff0" },
    },
  },
  UserType: {
    screen: usertype,
    navigationOptions: {
      headerStyle: { backgroundColor: "#ffff00" },
    },
  },
  DSignup: {
    screen: dsignup,
    navigationOptions: {
      headerStyle: { backgroundColor: "#f0fff0" },
    },
  },
  VehicleDetails: {
    screen: vehicledetails,
    navigationOptions: {
      headerStyle: { backgroundColor: "#f0fff0" },
    },
  },
  OTP: {
    screen: otp,
    navigationOptions: {
      headerStyle: { backgroundColor: "#f0fff0" },
    },
  },
  NewHome: {
    screen: newhome,
    navigationOptions: {
      title: "Main Screen",
      headerStyle: { backgroundColor: "#f0fff0" },
    },
  },
};
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#666",
    headerStyle: { backgroundColor: "#f0fff0" },
  },
});

export default createAppContainer(HomeStack);
