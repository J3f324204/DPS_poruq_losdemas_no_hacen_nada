import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const PagoRealizado = () => {
  return (
    <View style={styles.pagoRealizado}>
      <View
        style={[styles.pagoRealizadoChild, styles.checkCircleIconPosition]}
      />
      <Image
        style={[styles.checkCircleIcon, styles.checkCircleIconPosition]}
        contentFit="cover"
        source={require("../assets/checkcircle.png")}
      />
      <Text style={[styles.pagoRealizado1, styles.pagoRealizado1Typo]}>
        Pago realizado
      </Text>
      <Text
        style={[styles.suPedidoLlegara, styles.pagoRealizado1Typo]}
      >{`Su pedido llegara  en 
(cantidad de dias) a (a la direccion agregada)`}</Text>
      <Image
        style={[styles.pagoRealizadoItem, styles.pagoRealizadoItemPosition]}
        contentFit="cover"
        source={require("../assets/arrow-209.png")}
      />
      <Image
        style={[
          styles.whatsappImage20240305At5,
          styles.pagoRealizadoItemPosition,
        ]}
        contentFit="cover"
        source={require("../assets/whatsapp-image-20240305-at-559-3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  checkCircleIconPosition: {
    position: "absolute",
    left: "50%",
  },
  pagoRealizado1Typo: {
    color: Color.colorDarkslategray_200,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontStyle: "italic",
    position: "absolute",
  },
  pagoRealizadoItemPosition: {
    height: 37,
    top: 16,
    position: "absolute",
  },
  pagoRealizadoChild: {
    marginLeft: -176.2,
    top: 69,
    borderStyle: "solid",
    borderColor: Color.colorGray_100,
    borderTopWidth: 2.5,
    width: 360,
    height: 3,
    left: "50%",
  },
  checkCircleIcon: {
    marginLeft: -70,
    top: 209,
    width: 140,
    height: 140,
    left: "50%",
    overflow: "hidden",
  },
  pagoRealizado1: {
    top: 357,
    left: 94,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
  },
  suPedidoLlegara: {
    top: 401,
    left: 83,
    fontSize: 12,
    textAlign: "center",
    width: 201,
  },
  pagoRealizadoItem: {
    left: 16,
    width: 37,
    overflow: "hidden",
  },
  whatsappImage20240305At5: {
    marginLeft: 122,
    width: 49,
    left: "50%",
  },
  pagoRealizado: {
    backgroundColor: Color.colorGainsboro_200,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default PagoRealizado;
