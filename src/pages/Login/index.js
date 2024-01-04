import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { navigationNavigate } from "../../services/NavigationServices";
import { HomeName } from "../../constants/ScreenNames";
import masterStyles from "../../styles/masterStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import LinkedInModal from "@gcou/react-native-linkedin";

const LoginPage = () => {
  return (
    <SafeAreaView style={masterStyles.container}>
      <Text>Hello</Text>
      <Pressable
        style={styles.buttonContainer}
        onPress={() => navigationNavigate(HomeName)}
      >
        <Text>To Home </Text>
      </Pressable>

      <LinkedInModal
        // ref={this.linkedRef}
        clientID="7816sqyqx9hwe3"
        shouldGetAccessToken={false}
        clientSecret={null}
        redirectUri="http://localhost:8081/auth/linkedin/callback"
        permissions={["r_liteprofile", "r_emailaddress"]}
        // onSuccess={(res) => console.log(res)}
        onSuccess={({ authentication_code }) => console.log(authentication_code)}
        onError={(error) => console.log(error)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 16,
    paddingLeft: 16,
    backgroundColor: "grey",
    marginTop: 12,
  },
});

export default LoginPage;
