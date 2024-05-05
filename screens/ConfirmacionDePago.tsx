import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const ConfirmacionDePago = () => {
  return (
    <View style={styles.confirmacionDePago}>
      <View style={styles.confirmacionDePagoChild} />
      <View style={styles.confirmacionDePagoItem} />
      <Text style={styles.pago}>Pago</Text>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.realizar, styles.realizarTypo]}>Realizar</Text>
      </View>
      <Image
        style={[
          styles.confirmacionDePagoInner,
          styles.confirmacionDePagoInnerPosition,
        ]}
        contentFit="cover"
        source={require("../assets/arrow-209.png")}
      />
      <Image
        style={[
          styles.whatsappImage20240305At5,
          styles.confirmacionDePagoInnerPosition,
        ]}
        contentFit="cover"
        source={require("../assets/whatsapp-image-20240305-at-559-3.png")}
      />
      <View style={[styles.lineView, styles.confirmacionChildLayout]} />
      <Text style={[styles.total, styles.totalTypo]}>Total</Text>
      <View
        style={[
          styles.confirmacionDePagoChild1,
          styles.confirmacionChildLayout,
        ]}
      />
      <Text style={[styles.fecha, styles.totalTypo]}>Fecha</Text>
      <View
        style={[
          styles.confirmacionDePagoChild2,
          styles.confirmacionChildLayout,
        ]}
      />
      <Text style={[styles.codigoDeSeguridad, styles.realizarTypo]}>
        Codigo de seguridad
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 31,
    width: 145,
    position: "absolute",
  },
  realizarTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontStyle: "italic",
    position: "absolute",
  },
  confirmacionDePagoInnerPosition: {
    height: 37,
    top: 15,
    position: "absolute",
  },
  confirmacionChildLayout: {
    height: 2,
    width: 256,
    borderTopWidth: 1.5,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    position: "absolute",
  },
  totalTypo: {
    left: 58,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorGainsboro_200,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontStyle: "italic",
    position: "absolute",
  },
  confirmacionDePagoChild: {
    marginLeft: -181.3,
    top: 70,
    borderColor: Color.colorGray_100,
    borderTopWidth: 2.5,
    width: 360,
    height: 3,
    borderStyle: "solid",
    left: "50%",
    position: "absolute",
  },
  confirmacionDePagoItem: {
    marginLeft: -148,
    top: 134,
    backgroundColor: Color.colorDarkslategray_200,
    width: 295,
    height: 415,
    borderRadius: Border.br_21xl,
    left: "50%",
    position: "absolute",
  },
  pago: {
    marginLeft: -42,
    top: 173,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontStyle: "italic",
    color: Color.colorGainsboro_200,
    left: "50%",
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorGainsboro_200,
  },
  realizar: {
    top: 6,
    left: 42,
    color: Color.colorDarkslategray_200,
  },
  rectangleParent: {
    top: 487,
    left: 108,
  },
  confirmacionDePagoInner: {
    left: 7,
    width: 37,
    overflow: "hidden",
  },
  whatsappImage20240305At5: {
    marginLeft: 113,
    width: 49,
    left: "50%",
  },
  lineView: {
    top: 274,
    left: 53,
    height: 2,
    width: 256,
    borderTopWidth: 1.5,
    borderColor: Color.colorGainsboro_200,
  },
  total: {
    top: 243,
  },
  confirmacionDePagoChild1: {
    top: 347,
    left: 53,
    height: 2,
    width: 256,
    borderTopWidth: 1.5,
    borderColor: Color.colorGainsboro_200,
  },
  fecha: {
    top: 316,
  },
  confirmacionDePagoChild2: {
    top: 420,
    left: 52,
  },
  codigoDeSeguridad: {
    top: 389,
    left: 57,
    color: Color.colorGainsboro_200,
    fontSize: FontSize.size_base,
  },
  confirmacionDePago: {
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
    backgroundColor: Color.colorGainsboro_200,
  },
});

export default ConfirmacionDePago;
