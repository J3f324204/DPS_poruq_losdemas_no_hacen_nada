import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const Bienvenida = () => {
  return (
    <View style={styles.bienvenida}>
      <Image
        style={styles.whatsappImage20240305At5}
        contentFit="cover"
        source={require("../assets/whatsapp-image-20240305-at-559-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  whatsappImage20240305At5: {
    position: "absolute",
    marginLeft: -145,
    top: 109,
    left: "50%",
    width: 289,
    height: 344,
  },
  bienvenida: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default Bienvenida;
