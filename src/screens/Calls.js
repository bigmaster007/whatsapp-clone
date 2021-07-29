import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TouchableHighlight,
  Image,
} from "react-native";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";
import { DISCUSSIONS } from "../data";
import { Colors } from "../styles/Colors";

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
          <View
            style={{
              justifyContent: "flex-start",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {item.callMade ? (
              <>
                <MaterialIcons name="call-made" size={20} />
                <Text style={{ color: Colors.GRAY_DARK }}>
              {`(${item.callMade})`}
            </Text>
              </>
            ) : null}
            {item.receiveCall ? (
              <>
                <MaterialIcons name="call-received" size={20} />
                <Text style={{ color: Colors.GRAY_DARK }}>
              {`(${item.receiveCall})`}
            </Text>
              </>
            ) : null}
            <Text style={{ color: Colors.GRAY_DARK }}>
              {`Aujourd'hui à ${item.lastMessageHour}`}
            </Text>
          </View>
        </View>
      </>
    </TouchableHighlight>
  );
};
const Calls = () => {
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
          height: 40,
          width: 40,
          backgroundColor: Colors.GRAY_LIGHT,
          borderRadius: 40 / 2,
          elevation: 4,
          position: "absolute",
          bottom: 90,
          right: 20,
          justifyContent: "center",
        }}
      >
        <MaterialIcons
          style={{ alignSelf: "center" }}
          name="video-call"
          color="#000"
          size={22}
        />
      </TouchableOpacity>
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
          alignItems: "center",
        }}
      >
        <MaterialIcons
          style={{ alignSelf: "center" }}
          name="add-call"
          color="white"
          size={33}
        />
      </TouchableOpacity>
    </>
  );
};

export default Calls;
