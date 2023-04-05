import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../src/screens/Home";
import Profile from "../src/screens/Profile";
import MarketPlace from "../src/screens/MarketPlace";
import Community from "../src/screens/Community";

import { Image, View } from "react-native";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: true, tabBarShowLabel: false }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <View
                style={{
                  paddingTop: 12,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../src/assets/icons/home.png")}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: "#0077b6",
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <View
                style={{
                  paddingTop: 12,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../src/assets/icons/search.png")}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: "#0077b6",
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="MarketPlace"
        component={MarketPlace}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <View
                style={{
                  paddingTop: 12,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../src/assets/icons/email.png")}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: "#0077b6",
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Community"
        component={Community}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <View
                style={{
                  paddingTop: 12,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../src/assets/icons/user.png")}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: "#0077b6",
                  }}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
