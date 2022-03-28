import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import MyButton from "../components/MyButton";
import MyInput from "../components/MyInput";

export default function({ route, navigation }) {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const signupHandler = () => {
    // Alert.alert(`Таны утас: ${phone}, нууц үг: ${password}`);
    navigation.push("Login", {
      phone,
      password,
      garchig: "Таны нууц үг дээр байна"
    });
  };

  return (
    <View>
      <Image
        style={{ width: "100%", height: "50%" }}
        source={require("../../assets/images/shop.png")}
      />
      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
          marginTop: 10,
          color: "gray"
        }}
      >
        Та имэйл нууц үгээ оруулна уу
      </Text>

      <MyInput
        askeyboardType="number-pad"
        placeholder="Та имэйл хаягаа оруулна уу"
        onChangeText={setPhone}
      />

      <MyInput
        secureTextEntry={true}
        placeholder="Нууц үгээ оруулна уу"
        onChangeText={setPassword}
      />

      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <MyButton title="Буцах" onPress={() => navigation.goBack()} />
        <MyButton title="Нэвтрэх" onPress={signupHandler} />
      </View>
    </View>
  );
}

const css = StyleSheet.create({
  inputField: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10
  },
  button: {
    marginVertical: 5
  }
});
