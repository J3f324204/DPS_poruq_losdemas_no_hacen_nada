import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Carrito = () => {
  return (
    <View style={styles.carrito}>
      <Image
        style={[styles.carritoChild, styles.carritoChildPosition]}
        contentFit="cover"
        source={require("../assets/group-9.png")}
      />
      <Image
        style={[styles.carritoItem, styles.carritoChildPosition]}
        contentFit="cover"
        source={require("../assets/group-9.png")}
      />
      <Image
        style={[styles.carritoInner, styles.carritoChildPosition]}
        contentFit="cover"
        source={require("../assets/group-10.png")}
      />
      <Image
        style={[styles.groupIcon, styles.carritoChildPosition]}
        contentFit="cover"
        source={require("../assets/group-10.png")}
      />
      <Image
        style={[styles.carritoChild1, styles.carritoChildPosition]}
        contentFit="cover"
        source={require("../assets/group-10.png")}
      />
      <Image
        style={[styles.carritoChild2, styles.carritoChildPosition]}
        contentFit="cover"
        source={require("../assets/group-10.png")}
      />
      <Image
        style={[styles.carritoChild3, styles.carritoChildPosition]}
        contentFit="cover"
        source={require("../assets/group-10.png")}
      />
      <Image
        style={[styles.carritoChild4, styles.carritoChildPosition]}
        contentFit="cover"
        source={require("../assets/group-9.png")}
      />
      <View style={[styles.rectangleView, styles.lineIconLayout]} />
      <Image
        style={[styles.minusCircleIcon, styles.minusIconLayout]}
        contentFit="cover"
        source={require("../assets/minuscircle.png")}
      />
      <Image
        style={[styles.minusCircleIcon1, styles.minusIconLayout]}
        contentFit="cover"
        source={require("../assets/minuscircle.png")}
      />
      <Text style={styles.carrito1}>Carrito</Text>
      <Image
        style={[styles.lineIcon, styles.lineIconLayout]}
        contentFit="cover"
        source={require("../assets/line-16.png")}
      />
      <View style={[styles.lineView, styles.carritoChildLayout1]} />
      <View style={[styles.carritoChild5, styles.carritoChildLayout1]} />
      <Text style={styles.producto}>Producto</Text>
      <View style={[styles.carritoChild6, styles.carritoChildLayout]} />
      <View style={[styles.carritoChild7, styles.carritoChildLayout]} />
      <Text style={[styles.nombre, styles.nombreTypo]}>nombre</Text>
      <Text style={[styles.costo, styles.costoTypo]}>costo</Text>
      <Text style={[styles.nombre1, styles.nombreTypo]}>nombre</Text>
      <Text style={[styles.costo1, styles.costoTypo]}>costo</Text>
      <Text style={[styles.total, styles.totalTypo]}>Total</Text>
      <View style={[styles.carritoChild8, styles.carritoChildLayout1]} />
      <Text style={[styles.direccion, styles.totalTypo]}>Direccion</Text>
      <View style={styles.carritoChild9} />
      <Text style={[styles.continuar, styles.nombreTypo]}>Continuar</Text>
      <Image
        style={[styles.arrowIcon, styles.arrowIconPosition]}
        contentFit="cover"
        source={require("../assets/arrow-209.png")}
      />
      <Image
        style={[styles.whatsappImage20240305At5, styles.arrowIconPosition]}
        contentFit="cover"
        source={require("../assets/whatsapp-image-20240305-at-559-3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carritoChildPosition: {
    height: 96,
    width: 449,
    marginLeft: -227,
    left: "50%",
    position: "absolute",
  },
  lineIconLayout: {
    width: 295,
    position: "absolute",
  },
  minusIconLayout: {
    height: 24,
    width: 24,
    left: 271,
    position: "absolute",
    overflow: "hidden",
  },
  carritoChildLayout1: {
    height: 2,
    width: 256,
    borderTopWidth: 1.5,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    left: 49,
    position: "absolute",
  },
  carritoChildLayout: {
    height: 49,
    width: 54,
    borderRadius: Border.br_3xs,
    left: 50,
    position: "absolute",
    backgroundColor: Color.colorGainsboro_200,
  },
  nombreTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontStyle: "italic",
    position: "absolute",
  },
  costoTypo: {
    left: 119,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorDarkslategray_200,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontStyle: "italic",
    position: "absolute",
  },
  totalTypo: {
    left: 54,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorDarkslategray_200,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontStyle: "italic",
    position: "absolute",
  },
  arrowIconPosition: {
    height: 37,
    top: 13,
    position: "absolute",
  },
  carritoChild: {
    bottom: 76,
  },
  carritoItem: {
    bottom: 20,
  },
  carritoInner: {
    bottom: 395,
  },
  groupIcon: {
    bottom: 460,
  },
  carritoChild1: {
    top: 212,
  },
  carritoChild2: {
    top: 274,
  },
  carritoChild3: {
    top: 342,
  },
  carritoChild4: {
    bottom: 135,
  },
  rectangleView: {
    marginLeft: -148,
    top: 121,
    backgroundColor: "rgba(46, 46, 46, 0.2)",
    height: 479,
    borderRadius: Border.br_21xl,
    left: "50%",
  },
  minusCircleIcon: {
    top: 292,
  },
  minusCircleIcon1: {
    top: 366,
  },
  carrito1: {
    marginLeft: -42,
    top: 160,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorDarkslategray_200,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontStyle: "italic",
    left: "50%",
    position: "absolute",
  },
  lineIcon: {
    top: 439,
    left: 32,
    height: 1,
  },
  lineView: {
    top: 338,
  },
  carritoChild5: {
    top: 492,
  },
  producto: {
    top: 234,
    fontSize: FontSize.size_lg,
    left: 50,
    textAlign: "left",
    color: Color.colorDarkslategray_200,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontStyle: "italic",
    position: "absolute",
  },
  carritoChild6: {
    top: 280,
  },
  carritoChild7: {
    top: 353,
  },
  nombre: {
    left: 117,
    fontSize: FontSize.size_base,
    color: Color.colorDarkslategray_200,
    top: 280,
  },
  costo: {
    top: 310,
  },
  nombre1: {
    left: 117,
    fontSize: FontSize.size_base,
    color: Color.colorDarkslategray_200,
    top: 353,
  },
  costo1: {
    top: 383,
  },
  total: {
    top: 461,
  },
  carritoChild8: {
    top: 538,
  },
  direccion: {
    top: 507,
  },
  carritoChild9: {
    top: 553,
    left: 104,
    backgroundColor: Color.colorDarkslategray_200,
    width: 145,
    height: 31,
    borderRadius: Border.br_21xl,
    position: "absolute",
  },
  continuar: {
    top: 559,
    left: 141,
    color: Color.colorGainsboro_200,
  },
  arrowIcon: {
    left: 9,
    width: 37,
    overflow: "hidden",
  },
  whatsappImage20240305At5: {
    marginLeft: 115,
    width: 49,
    left: "50%",
  },
  carrito: {
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
    backgroundColor: Color.colorGainsboro_200,
  },
});

export default Carrito;
