import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableHighlight,
  Image,
  TouchableOpacity,
} from "react-native";
import { DISCUSSIONS } from "../data";
import { Colors } from "../styles/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const VflatListItem = ({ item }) => {
  return (
    <TouchableHighlight
      style={{
        paddingHorizontal: 10,
        paddingVertical: 12,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <>
        <View>
          <Image
            style={{
              height: 55,
              width: 55,
              borderRadius: 55 / 2,
              alignSelf: "center",
            }}
            source={item.image}
          />
        </View>
        <View style={{ marginLeft: 15, flex: 1 }}>
          <Text style={{ fontSize: 18 }}>{item.name}</Text>
          <View style={{ justifyContent: "flex-start", flexDirection: "row" }}>
            <Text style={{ color: Colors.GRAY_DARK }}>
              {item.message.length > 40
                ? `${item.message.substr(0, 40)}...`
                : item.message}
            </Text>
          </View>
        </View>
        <View>
          <Text style={{ marginLeft: 3, color: Colors.GRAY_DARK }}>
            {item.lastMessageHour}
          </Text>
          {item.unread > 0 ? (
            <View
              style={{
                height: 20,
                width: 20,
                borderRadius: 20,
                marginLeft: 10,
                backgroundColor: Colors.ufoGreen,
              }}
            >
              <Text style={{ alignSelf: "center", color: "#FFF" }}>{item.unread}</Text>
            </View>
          ) : null}
        </View>
      </>
    </TouchableHighlight>
  );
};

const Home = () => {
  const renderItem = ({ item }) => <VflatListItem item={item} />;

  return (
    <>
      <FlatList
        data={DISCUSSIONS}
        renderItem={renderItem}
        contentContainerStyle={{ flexGrow: 1, backgroundColor: "#FFF" }}
      />
      <TouchableOpacity
        style={{
          height: 60,
          width: 60,
          backgroundColor: Colors.ufoGreen,
          borderRadius: 60 / 2,
          elevation: 4,
          position: "absolute",
          bottom: 20,
          right: 10,
          justifyContent: "center",
        }}
      >
        <MaterialCommunityIcons
          style={{ alignSelf: "center" }}
          name="message-text-outline"
          color="white"
          size={33}
        />
      </TouchableOpacity>
    </>
  );
};

export default Home;
