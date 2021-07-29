import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Colors } from "./src/styles/Colors";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import Home from "./src/screens/Home";
import Status from "./src/screens/Status";
import Calls from "./src/screens/Calls";
import Photos from "./src/screens/Photos";

const MaterialTab = createMaterialTopTabNavigator();
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar backgroundColor={Colors.tealGreen} style="light" />
        <View
          style={{
            height: 70,
            backgroundColor: Colors.bangladeshGreen,
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 40,
            flexDirection: "row",
            paddingHorizontal: 10,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              color: "#FFF",
              alignSelf: "center",
            }}
          >
            WhatsApp
          </Text>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <TouchableOpacity style={{ marginRight: 10 }}>
              <MaterialIcons
                name="search"
                style={{ alignSelf: "center" }}
                size={25}
                color="#FFF"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialIcons
                style={{ alignSelf: "center" }}
                name="more-vert"
                size={25}
                color="#FFF"
              />
            </TouchableOpacity>
          </View>
        </View>
        <NavigationContainer>
          <MaterialTab.Navigator
          initialRouteName="Discussions"
            tabBarOptions={{
              labelStyle: { color: "#FFF", fontWeight: "bold" },
              tabStyle: {
                backgroundColor: Colors.bangladeshGreen,marginBottom: 10
              },
              inactiveTintColor: Colors.teaGreen,
              activeTintColor: "#FFF",
              showIcon: true,
              indicatorStyle: { backgroundColor: "#FFF", marginTop: 10, height: 3,  },
              indicatorContainerStyle:{ backgroundColor: Colors.bangladeshGreen}
            }}
          >
            <MaterialTab.Screen
              name="Picture"
              component={Photos}
              options={{
                tabBarLabel: (props) => (
                  <MaterialIcons
                    name="photo-camera"
                    color={props.color}
                    size={22}
                  />
                ),
              }}
            />
            <MaterialTab.Screen
              name="Discussions"
              component={Home}
              options={{
                tabBarLabel: (props) => (
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ color: props.color, fontWeight: "bold" }}>
                      DISC.
                    </Text>
                    <View
                      style={{
                        height: 20,
                        width: 20,
                        borderRadius: 20,
                        marginLeft: 10,
                        backgroundColor: props.color,
                      }}
                    >
                      <Text style={{ alignSelf: "center", fontWeight: "bold" }}>
                        6
                      </Text>
                    </View>
                  </View>
                ),
              }}
            />
            <MaterialTab.Screen
              name="Status"
              component={Status}
              options={{
                tabBarLabel: (props) => (
                  <Text style={{ color: props.color, fontWeight: "bold" }}>
                    STATUT
                  </Text>
                ),
              }}
            />
            <MaterialTab.Screen
              name="Calls"
              component={Calls}
              options={{
                tabBarLabel: (props) => (
                  <Text style={{ color: props.color, fontWeight: "bold" }}>
                    APPELS
                  </Text>
                ),
              }}
            />
          </MaterialTab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
