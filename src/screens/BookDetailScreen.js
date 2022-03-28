import React, { useState, useEffect, useLayoutEffect } from "react";
import { Feather } from "@expo/vector-icons";
import { useHeaderHeight } from "@react-navigation/stack";
import axios from "axios";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import useBook from "../hooks/useBook";

const BookDetailScreen = props => {
  const { id } = props.route.params;
  const [book, error] = useBook(id);

  const height = useHeaderHeight();

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <Feather
          size={25}
          style={{ marginRight: 20 }}
          name="menu"
          color="white"
          onPress={() => {
            console.log("...");
          }}
        />
      )
    });
  }, [props.navigation]);

  if (error) {
    return (
      <Text style={{ color: "red", margin: 30 }}>Алдаа гарлаа! {error}</Text>
    );
  }

  if (!book) {
    return null;
  }

  return (
    <View style={{ padding: 20 }}>
      <Image
        style={{ width: 300, height: 400, alignSelf: "center" }}
        source={{ uri: "https://data.internom.mn/media/images" + book.photo }}
      />
      <Text style={{ fontSize: 18, fontWeight: "bold", padding: 10 }}>
        {book.name}
      </Text>
      <Text>{book.content}</Text>
      <Button onPress={() => props.navigation.goBack()} title="Буцах" />
    </View>
  );
};

export default BookDetailScreen;

const styles = StyleSheet.create({});
