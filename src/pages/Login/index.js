import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { navigationNavigate } from "../../services/NavigationServices";
import { HomeName } from "../../constants/ScreenNames";
import masterStyles from "../../styles/masterStyles";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginPage = () => {
  return (
    <SafeAreaView style={masterStyles.container}>
      <Text>Hello</Text>
      <Pressable style={styles.buttonContainer} onPress={() => navigationNavigate(HomeName)}>
        <Text>To Home </Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    buttonContainer: {
        paddingTop: 12,
        paddingBottom: 12,
        paddingRight: 16,
        paddingLeft: 16,
        backgroundColor: 'grey',
        marginTop: 12,
    }
})

export default LoginPage;
