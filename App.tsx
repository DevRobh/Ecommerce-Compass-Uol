import React from "react";
import {
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Welcome_Screen from "./src/screens/Login/Welcome_Screen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp_Screen from "./src/screens/SignUp/SignUp_Screen";
import Home from "./src/screens/Home/Home";

import fetchFonts from "./assets/fonts/fonts";

export default function App() {
  const [loaded, setLoaded] = React.useState(false);

  const Stack = createStackNavigator();

  React.useEffect(() => {
    fetchFonts().then(() => setLoaded(true));
  }, []);

  if (!loaded) {
    return <ActivityIndicator color="#fff" />;
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator>
          {/* WELCOME SCREEN */}
          <Stack.Screen
            options={{ headerShown: false }}
            name="Welcome_Screen"
            component={Welcome_Screen}
          />

          {/* SIGN UP SCREEN */}
          <Stack.Screen
            options={({ navigation }) => ({
              headerTitle: "",
              headerStyle: {
                backgroundColor: "#282729",
                shadowColor: "transparent",
              },
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.goBack();
                  }}
                >
                  <Image
                    source={require("./assets/icons/arrow.png")}
                    style={{
                      width: 30,
                      height: 30,
                      marginLeft: 30,
                      marginTop: 40,
                    }}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              ),
              headerBackTitleVisible: false,
            })}
            name="SignUp_Screen"
            component={SignUp_Screen}
          />

          {/* HOME SCREEN */}
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={Home}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
