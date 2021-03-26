/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from "react";
import { Provider, useSelector } from "react-redux";
import { createStore } from "redux";
import { connect } from "react-redux";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./src/screens/LoginScreen/LoginScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen/WelcomeScreen";
import loginReducer from "./src/redux/reducer";

const Stack = createStackNavigator();
// const store = createStore(loginReducer);

const App = () => {
  return (
    // <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            title: "Welcome",
          }}
        />

        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: "Login",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    //</Provider>
  );
};
// const mapStateToProps = (state) => {
//   const { login } = state;
//   return { login };
// };
// export default connect(mapStateToProps)(App);
export default App;
