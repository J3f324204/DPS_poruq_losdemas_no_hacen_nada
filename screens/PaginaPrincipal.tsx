import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const PaginaPrincipal = () => {
  return (
    <View style={styles.paginaPrincipal}>
      <Image
        style={[styles.paginaPrincipalChild, styles.paginaChildPosition]}
        contentFit="cover"
        source={require("../assets/group-9.png")}
      />
      <Image
        style={[styles.paginaPrincipalItem, styles.paginaChildPosition]}
        contentFit="cover"
        source={require("../assets/group-9.png")}
      />
      <Image
        style={[styles.paginaPrincipalInner, styles.paginaChildPosition]}
        contentFit="cover"
        source={require("../assets/group-10.png")}
      />
      <Image
        style={[styles.groupIcon, styles.paginaChildPosition]}
        contentFit="cover"
        source={require("../assets/group-10.png")}
      />
      <Image
        style={[styles.paginaPrincipalChild1, styles.paginaChildPosition]}
        contentFit="cover"
        source={require("../assets/group-10.png")}
      />
      <Image
        style={[styles.paginaPrincipalChild2, styles.paginaChildPosition]}
        contentFit="cover"
        source={require("../assets/group-10.png")}
      />
      <Image
        style={[styles.paginaPrincipalChild3, styles.paginaChildPosition]}
        contentFit="cover"
        source={require("../assets/group-10.png")}
      />
      <Image
        style={[styles.paginaPrincipalChild4, styles.paginaChildPosition]}
        contentFit="cover"
        source={require("../assets/group-9.png")}
      />
      <Image
        style={styles.whatsappImage20240305At5}
        contentFit="cover"
        source={require("../assets/whatsapp-image-20240305-at-559-3.png")}
      />
      <View style={styles.rectangleView} />
      <View style={styles.paginaPrincipalChild5} />
      <View style={[styles.paginaPrincipalChild6, styles.paginaChildLayout]} />
      <View style={[styles.paginaPrincipalChild7, styles.paginaChildLayout]} />
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={[styles.vinilos, styles.cdLayout]}>Vinilos</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.inicio, styles.cdTypo]}>Inicio</Text>
      </View>
      <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
        <View style={[styles.groupInner, styles.groupLayout]} />
        <Text style={[styles.cd, styles.cdTypo]}>CD</Text>
      </View>
      <Text style={[styles.novedades, styles.cdTypo]}>Novedades</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  paginaChildPosition: {
    height: 96,
    width: 449,
    marginLeft: -224,
    left: "50%",
    position: "absolute",
  },
  paginaChildLayout: {
    left: 195,
    opacity: 0.3,
    height: 150,
    width: 151,
    backgroundColor: Color.colorDarkslategray_200,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  rectangleLayout: {
    height: 46,
    position: "absolute",
  },
  groupLayout: {
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
    height: 46,
    width: 109,
    position: "absolute",
  },
  cdLayout: {
    height: 30,
    width: 80,
  },
  cdTypo: {
    color: Color.colorDarkslategray_200,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontStyle: "italic",
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  paginaPrincipalChild: {
    bottom: 77,
  },
  paginaPrincipalItem: {
    bottom: 21,
  },
  paginaPrincipalInner: {
    bottom: 396,
  },
  groupIcon: {
    bottom: 461,
  },
  paginaPrincipalChild1: {
    top: 211,
  },
  paginaPrincipalChild2: {
    top: 273,
  },
  paginaPrincipalChild3: {
    top: 341,
  },
  paginaPrincipalChild4: {
    bottom: 136,
  },
  whatsappImage20240305At5: {
    marginLeft: 104,
    width: 49,
    height: 37,
    top: 20,
    left: "50%",
    position: "absolute",
  },
  rectangleView: {
    top: 242,
    width: 160,
    height: 160,
    backgroundColor: Color.colorDarkslategray_200,
    borderRadius: Border.br_mini,
    left: 10,
    position: "absolute",
  },
  paginaPrincipalChild5: {
    top: 448,
    opacity: 0.3,
    height: 150,
    width: 151,
    backgroundColor: Color.colorDarkslategray_200,
    borderRadius: Border.br_mini,
    left: 10,
    position: "absolute",
  },
  paginaPrincipalChild6: {
    top: 445,
  },
  paginaPrincipalChild7: {
    top: 243,
  },
  groupChild: {
    backgroundColor: Color.colorDarkslategray_200,
  },
  vinilos: {
    left: 17,
    color: Color.colorGainsboro_200,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontStyle: "italic",
    fontSize: FontSize.size_5xl,
    width: 80,
    top: 9,
    position: "absolute",
  },
  rectangleParent: {
    left: 35,
    width: 109,
    height: 46,
    top: 91,
  },
  groupItem: {
    backgroundColor: Color.colorGainsboro_200,
  },
  inicio: {
    top: 8,
    left: 22,
    height: 30,
    width: 80,
  },
  rectangleGroup: {
    left: 1,
    width: 109,
    height: 46,
    top: 20,
  },
  groupInner: {
    backgroundColor: "rgba(226, 226, 226, 0)",
  },
  cd: {
    marginLeft: -22.2,
    height: 30,
    width: 80,
    top: 9,
    color: Color.colorDarkslategray_200,
    left: "50%",
  },
  rectangleContainer: {
    left: 151,
    width: 116,
    top: 91,
  },
  novedades: {
    top: 182,
    left: 23,
  },
  paginaPrincipal: {
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
    backgroundColor: Color.colorGainsboro_200,
  },
});

export default PaginaPrincipal;
