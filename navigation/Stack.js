import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Detail from "../screens/Detail";
import Tabs from "./Tabs";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    mode="modal"
    screenOptions={{
      gestureEnabled: true, // 안드로이드 제스처
      headerStyle: {
        backgroundColor: "black",
        // tab 아래 border 지우기
        borderBottomColor: "black", // 웹
        shadowColor: "black", // IOS
      },
      headerTintColor: "white",
      // headerBackTitleVisible: false,
    }}
  >
    <Stack.Screen name="Tabs" component={Tabs} />
    <Stack.Screen name="Detail" component={Detail} />
  </Stack.Navigator>
);
