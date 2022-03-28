import React, { useState, useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Alert,
  Button
} from "react-native";

import {
  HeaderButtons,
  HeaderButton,
  Item,
  HiddenItem,
  OverflowMenu
} from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

import Search from "../components/Search";
import useCategory from "../hooks/useCategory";
import CategoryBookList from "../components/CategoryBookList";
import Spinner from "../components/Spinner";
import MyHeaderButton from "../components/MyHeaderButton";

const HomeScreen = ({ navigation }) => {
  const [localSearchText, setLocalSearchText] = useState("");
  const [serverSearchText, setServerSearchText] = useState("");
  const [categories, errorMessage, loading] = useCategory();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
          <Item
            title="Цэс"
            iconName="ios-menu"
            onPress={() => navigation.toggleDrawer()}
          />
        </HeaderButtons>
      )
    });
  }, [navigation, localSearchText]);

  const searchBookFromServer = () => {
    console.log(`Сэрвэрээс ${localSearchText} утгаар хайж эхэллээ...`);

    setServerSearchText(localSearchText);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {loading ? (
        <Spinner />
      ) : (
        <View>
          <Search
            value={localSearchText}
            onValueChange={setLocalSearchText}
            onFinishEnter={searchBookFromServer}
          />

          {errorMessage && (
            <Text style={{ marginHorizontal: 20, color: "red" }}>
              {errorMessage}
            </Text>
          )}
          <ScrollView style={{ marginTop: 20 }}>
            {categories.map(category => (
              <CategoryBookList
                searchLocalValue={localSearchText}
                searchServerValue={serverSearchText}
                key={category._id}
                style={{ marginVertical: 10 }}
                data={category}
              />
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
