import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import Favs from "../screens/Favs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { Platform } from "react-native";

const Tabs = createBottomTabNavigator();

export default ({ navigation, route }) => {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route) || "Movies";
    // console.log(routeName);
    navigation.setOptions({
      title: routeName,
      //   headerStyle: {
      //     backgroundColor: routeName === "Tv" ? "blue" : "white",
      //   },
    });
  }, [route]);

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => {
        let iconName = Platform.OS === "ios" ? "ios-" : "md-";
        if (route.name === "Movies") {
          iconName += "film";
        } else if (route.name === "Tv") {
          iconName += "tv";
        } else if (route.name === "Search") {
          iconName += "search";
        } else if (route.name === "Favourites") {
          iconName += "heart";
        }

        return {
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={iconName}
                color={focused ? "white" : "grey"}
                size={26}
              />
            );
          },
        };
      }}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: "black",
          borderTopColor: "black",
        },
      }}
    >
      <Tabs.Screen name="Movies" component={Movies} />
      <Tabs.Screen name="Tv" component={Tv} />
      <Tabs.Screen name="Search" component={Search} />
      <Tabs.Screen name="Favourites" component={Favs} />
    </Tabs.Navigator>
  );
};
