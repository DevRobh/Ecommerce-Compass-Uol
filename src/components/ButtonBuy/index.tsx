import React from "react";
import { View, Pressable, Text, ActivityIndicator } from "react-native";
import { styles } from "./style";

type ButtonBuyProps = {
  children: string;
  onPress: () => void;
  isloading: boolean;
  disable: boolean;
};

function ButtonBuy({
  children,
  onPress,
  isloading,
  disable,
}: ButtonBuyProps): JSX.Element {
  return (
    <Pressable
      disabled={disable}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View>
        {isloading ? (
          <ActivityIndicator size={"large"} color="white" />
        ) : (
          <Text>{children}</Text>
        )}
      </View>
    </Pressable>
  );
}

export default ButtonBuy;
