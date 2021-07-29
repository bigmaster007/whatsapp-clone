import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { DISCUSSIONS } from "../data";
import { Colors } from "../styles/Colors";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";

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
          <View
            style={{
              height: 55,
              width: 55,
              borderRadius: 55 / 2,
              alignSelf: "center",
              borderColor: Colors.tealGreen,
              borderWidth: 3,
              justifyContent: "center",
            }}
          >
            <Image
              style={{
                height: 50,
                width: 50,
                borderRadius: 50 / 2,
                alignSelf: "center",
                borderColor: "#FFF",
                borderWidth: 2,
              }}
              source={item.image}
            />
          </View>
        </View>
        <View style={{ marginLeft: 15, flex: 1 }}>
          <Text style={{ fontSize: 18 }}>{item.name}</Text>
          <View style={{ justifyContent: "flex-start", flexDirection: "row" }}>
            <Text style={{ color: Colors.GRAY_DARK }}>
              {`Aujourd'hui à ${item.lastMessageHour}`}
            </Text>
          </View>
        </View>
      </>
    </TouchableHighlight>
  );
};

const FlatListHeader = () => {
  return (
    <View>
      <TouchableHighlight
        style={{
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexDirection: "row",
          padding: 10,
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
              source={require("../assets/1617208100000.jpg")}
            />
            <TouchableOpacity
              style={{
                height: 30,
                width: 30,
                backgroundColor: Colors.tealGreen,
                borderRadius: 30 / 2,
                borderColor: "#FFF",
                borderWidth: 3,
                position: "absolute",
                bottom: 0,
                right: -10
              }}
            >
              <MaterialIcons name="add" color="#FFF" size={22} />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, marginLeft: 20 }}>
            <Text style={{ fontWeight: "bold", fontSize: 17 }}>Mon statut</Text>
            <Text style={{ color: Colors.GRAY_DARK }}>
              Appuyez pour Ajouter un statut
            </Text>
          </View>
        </>
      </TouchableHighlight>
      <View style={{ padding: 10, backgroundColor: Colors.GRAY_LIGHT }}>
        <Text style={{ fontWeight: "bold" }}>Récentes mises à jour</Text>
      </View>
    </View>
  );
};
const Status = () => {
  const renderItem = ({ item }) => <VflatListItem item={item} />;
  return (
    <>
      <FlatList
        data={DISCUSSIONS}
        renderItem={renderItem}
        contentContainerStyle={{ flexGrow: 1, backgroundColor: "#FFF" }}
        ListHeaderComponent={<FlatListHeader />}
        ListHeaderComponentStyle={{}}
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
        <Octicons
          style={{ alignSelf: "center" }}
          name="pencil"
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
        }}
      >
        <MaterialIcons
          style={{ alignSelf: "center" }}
          name="photo-camera"
          color="white"
          size={33}
        />
      </TouchableOpacity>
    </>
  );
};

export default Status;
