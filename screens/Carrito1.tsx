import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const Carrito1 = () => {
  return (
    <View style={styles.carrito}>
      <Image
        style={styles.carritoChild}
        contentFit="cover"
        source={require("../assets/arrow-209.png")}
      />
      <Image
        style={styles.whatsappImage20240305At5}
        contentFit="cover"
        source={require("../assets/whatsapp-image-20240305-at-559-3.png")}
      />
      <View style={[styles.carritoItem, styles.carritoPosition]} />
      <Text style={[styles.carrito1, styles.carrito1Typo]}>Carrito</Text>
      <Image
        style={[styles.carritoInner, styles.carritoPosition]}
        contentFit="cover"
        source={require("../assets/line-16.png")}
      />
      <View style={[styles.lineView, styles.lineViewPosition]} />
      <Text style={styles.direccion}>Direccion</Text>
      <View style={styles.rectangleView} />
      <View style={[styles.carritoChild1, styles.carritoChildLayout]} />
      <View style={[styles.carritoChild2, styles.carritoChildLayout]} />
      <View style={[styles.carritoChild3, styles.carritoChildLayout]} />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.continuar, styles.carrito1Typo]}>Continuar</Text>
      </View>
      <Image
        style={styles.interface86Icon}
        contentFit="cover"
        source={require("../assets/interface86.png")}
      />
      <Text style={styles.formatoDePago}>Formato de pago</Text>
      <View style={[styles.carritoChild4, styles.lineViewPosition]} />
    </View>
  );
};

const styles = StyleSheet.create({
  carritoPosition: {
    width: 295,
    marginLeft: -148,
    left: "50%",
    position: "absolute",
  },
  carrito1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontStyle: "italic",
    position: "absolute",
  },
  lineViewPosition: {
    borderStyle: "solid",
    left: "50%",
    position: "absolute",
  },
  carritoChildLayout: {
    backgroundColor: Color.colorGainsboro_300,
    height: 49,
    width: 54,
    borderRadius: Border.br_3xs,
    top: 337,
    position: "absolute",
  },
  groupChildLayout: {
    height: 31,
    width: 145,
    position: "absolute",
  },
  carritoChild: {
    left: 12,
    width: 37,
    height: 37,
    top: 21,
    position: "absolute",
    overflow: "hidden",
  },
  whatsappImage20240305At5: {
    marginLeft: 118,
    width: 49,
    left: "50%",
    height: 37,
    top: 21,
    position: "absolute",
  },
  carritoItem: {
    top: 128,
    backgroundColor: Color.colorDarkslategray_200,
    height: 397,
    borderRadius: Border.br_21xl,
  },
  carrito1: {
    marginLeft: -42,
    top: 167,
    fontSize: FontSize.size_5xl,
    color: Color.colorGainsboro_200,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontStyle: "italic",
    left: "50%",
  },
  carritoInner: {
    top: 417,
    height: 1,
  },
  lineView: {
    marginLeft: -127.7,
    top: 269,
    borderColor: Color.colorGainsboro_200,
    borderTopWidth: 1.5,
    width: 256,
    height: 2,
  },
  direccion: {
    top: 240,
    left: 77,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.colorGainsboro_200,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontStyle: "italic",
    position: "absolute",
  },
  rectangleView: {
    height: 49,
    width: 54,
    borderRadius: Border.br_3xs,
    top: 337,
    left: 53,
    position: "absolute",
    backgroundColor: Color.colorGainsboro_200,
  },
  carritoChild1: {
    left: 123,
  },
  carritoChild2: {
    left: 192,
  },
  carritoChild3: {
    left: 262,
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorGainsboro_200,
    width: 145,
  },
  continuar: {
    top: 6,
    left: 35,
    fontSize: FontSize.size_base,
    color: Color.colorDarkslategray_200,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontStyle: "italic",
  },
  rectangleParent: {
    top: 462,
    left: 108,
  },
  interface86Icon: {
    top: 239,
    left: 47,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  formatoDePago: {
    top: 289,
    left: 53,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.colorGainsboro_200,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontStyle: "italic",
    position: "absolute",
  },
  carritoChild4: {
    marginLeft: -183.2,
    top: 72,
    borderColor: Color.colorGray_100,
    borderTopWidth: 2.5,
    width: 360,
    height: 3,
  },
  carrito: {
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
    backgroundColor: Color.colorGainsboro_200,
  },
});

export default Carrito1;
