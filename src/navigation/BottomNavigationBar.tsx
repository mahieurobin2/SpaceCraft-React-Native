import { Routes } from "./Routes";
import { Colors } from "react-native-paper";
import React from "react";
import FeedScreen from "../screens/FeedScreen";
import TermsScreen from "../screens/TermsScreen";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const StarshipNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: "modal",
      }}
    >
      <Stack.Screen
        name={Routes.STARSHIP_FEED_SCREEN}
        component={FeedScreen}
        // component={StarshipFeedExampleScreen}
      />
      <Stack.Screen
        name={Routes.STARSHIP_FEED_SCREEN}
        component={FeedScreen}
      />
    </Stack.Navigator>
  );
};

const PilotNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={Routes.STARSHIP_DETAIL_SCREEN} component={TermsScreen} />
      <Stack.Screen
        name={Routes.STARSHIP_FEED_SCREEN}
        component={TermsScreen}}
      />
    </Stack.Navigator>
  );
};

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      activeColor={Colors.purple500}
      inactiveColor={Colors.grey300}
      barStyle={{ backgroundColor: Colors.white }}
    >
      <Tab.Screen
        name={Routes.STARSHIP_DETAIL_SCREEN}
        component={StarshipNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="space-shuttle" size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.STARSHIP_FEED_SCREEN}
        component={PilotNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-astronaut" size={22} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

function createMaterialBottomTabNavigator() {
    throw new Error("Function not implemented.");
}
function createStackNavigator() {
    throw new Error("Function not implemented.");
}

