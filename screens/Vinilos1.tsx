import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Vinilos1 = () => {
  return (
    <View style={[styles.vinilos, styles.vinilosLayout1]}>
      <View style={styles.vinilosChild} />
      <View style={[styles.vinilosItem, styles.vinilosLayout]} />
      <View style={[styles.vinilosInner, styles.vinilosLayout]} />
      <View
        style={[
          styles.tiscoiconslinearcartAddParent,
          styles.tiscoiconslinearcartLayout1,
        ]}
      >
        <Image
          style={[
            styles.tiscoiconslinearcartAdd,
            styles.tiscoiconslinearcartLayout,
          ]}
          contentFit="cover"
          source={require("../assets/tiscoiconslinearcartadd.png")}
        />
        <Image
          style={[
            styles.tiscoiconslinearcartMinus,
            styles.tiscoiconslinearcartLayout,
          ]}
          contentFit="cover"
          source={require("../assets/tiscoiconslinearcartminus.png")}
        />
      </View>
      <View
        style={[
          styles.tiscoiconslinearcartAddGroup,
          styles.tiscoiconslinearcartLayout1,
        ]}
      >
        <Image
          style={[
            styles.tiscoiconslinearcartAdd,
            styles.tiscoiconslinearcartLayout,
          ]}
          contentFit="cover"
          source={require("../assets/tiscoiconslinearcartadd.png")}
        />
        <Image
          style={[
            styles.tiscoiconslinearcartMinus,
            styles.tiscoiconslinearcartLayout,
          ]}
          contentFit="cover"
          source={require("../assets/tiscoiconslinearcartminus.png")}
        />
      </View>
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <View style={[styles.vinilosChild1, styles.rectangleViewLayout]} />
      <View
        style={[
          styles.tiscoiconslinearcartAddContainer,
          styles.groupViewPosition,
        ]}
      >
        <Image
          style={[
            styles.tiscoiconslinearcartAdd,
            styles.tiscoiconslinearcartLayout,
          ]}
          contentFit="cover"
          source={require("../assets/tiscoiconslinearcartadd.png")}
        />
        <Image
          style={[
            styles.tiscoiconslinearcartMinus,
            styles.tiscoiconslinearcartLayout,
          ]}
          contentFit="cover"
          source={require("../assets/tiscoiconslinearcartminus.png")}
        />
      </View>
      <View style={[styles.groupView, styles.groupViewPosition]}>
        <Image
          style={[
            styles.tiscoiconslinearcartAdd,
            styles.tiscoiconslinearcartLayout,
          ]}
          contentFit="cover"
          source={require("../assets/tiscoiconslinearcartadd.png")}
        />
        <Image
          style={[
            styles.tiscoiconslinearcartMinus,
            styles.tiscoiconslinearcartLayout,
          ]}
          contentFit="cover"
          source={require("../assets/tiscoiconslinearcartminus.png")}
        />
      </View>
      <View style={styles.vinilosChild2} />
      <Image
        style={[styles.mediacontrol38Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/mediacontrol-38.png")}
      />
      <Image
        style={[styles.mediacontrol45Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/mediacontrol-38.png")}
      />
      <Image
        style={[styles.mediacontrol40Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/mediacontrol-38.png")}
      />
      <Image
        style={[styles.mediacontrol41Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/mediacontrol-38.png")}
      />
      <Image
        style={[styles.arrowIcon, styles.arrowIconPosition]}
        contentFit="cover"
        source={require("../assets/arrow-209.png")}
      />
      <Image
        style={styles.searchIcon}
        contentFit="cover"
        source={require("../assets/search.png")}
      />
      <Image
        style={styles.shoppingCartIcon}
        contentFit="cover"
        source={require("../assets/shoppingcart.png")}
      />
      <Image
        style={[styles.whatsappImage20240305At5, styles.arrowIconPosition]}
        contentFit="cover"
        source={require("../assets/whatsapp-image-20240305-at-559-3.png")}
      />
      <View style={[styles.vinilosChild3, styles.vinilosChild3Position]} />
      <Text style={styles.nombre}>Nombre</Text>
      <View style={styles.vinilosChild4} />
      <View style={styles.vinilosInner1}>
        <View style={styles.groupChildPosition}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <View style={[styles.mediacontrol35, styles.iconLayout]}>
            <View style={styles.union}>
              <Image
                style={[styles.unionChild, styles.vinilosLayout1]}
                contentFit="cover"
                source={require("../assets/ellipse-1.png")}
              />
              <View style={styles.rectangleGroup}>
                <View style={[styles.groupItem, styles.groupLayout]} />
                <View style={[styles.groupInner, styles.groupLayout]} />
              </View>
            </View>
          </View>
          <Image
            style={[styles.mediacontrol17Icon, styles.lineViewPosition]}
            contentFit="cover"
            source={require("../assets/mediacontrol-17.png")}
          />
          <Image
            style={[styles.mediacontrol18Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/mediacontrol-18.png")}
          />
          <View style={[styles.lineView, styles.lineViewPosition]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vinilosLayout1: {
    width: "100%",
    overflow: "hidden",
  },
  vinilosLayout: {
    height: 150,
    width: 151,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_mini,
    top: 200,
    position: "absolute",
  },
  tiscoiconslinearcartLayout1: {
    width: 84,
    height: 37,
    top: 363,
    position: "absolute",
  },
  tiscoiconslinearcartLayout: {
    width: 37,
    overflow: "hidden",
  },
  rectangleViewLayout: {
    top: 413,
    height: 150,
    width: 151,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  groupViewPosition: {
    top: 576,
    height: 37,
    width: 84,
    position: "absolute",
  },
  iconLayout1: {
    height: 42,
    width: 42,
    position: "absolute",
    overflow: "hidden",
  },
  arrowIconPosition: {
    top: 14,
    height: 37,
    position: "absolute",
  },
  vinilosChild3Position: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChildPosition: {
    marginLeft: -115,
    height: 156,
    width: 230,
    top: 0,
    left: "50%",
    position: "absolute",
  },
  iconLayout: {
    height: 40,
    width: 40,
    top: 53,
    overflow: "hidden",
  },
  groupLayout: {
    borderWidth: 2,
    borderColor: Color.colorDarkslategray_100,
    borderRadius: Border.br_11xs,
    bottom: "-20%",
    top: "-20%",
    width: "48.72%",
    height: "140%",
    borderStyle: "solid",
    position: "absolute",
  },
  lineViewPosition: {
    left: 30,
    position: "absolute",
  },
  vinilosChild: {
    marginLeft: -175.2,
    top: 73,
    borderColor: Color.colorGray_100,
    borderTopWidth: 2.5,
    width: 350,
    height: 3,
    borderStyle: "solid",
    left: "50%",
    position: "absolute",
  },
  vinilosItem: {
    left: 10,
  },
  vinilosInner: {
    left: 195,
  },
  tiscoiconslinearcartAdd: {
    left: 0,
    top: 0,
    position: "absolute",
    height: 37,
  },
  tiscoiconslinearcartMinus: {
    left: 47,
    top: 0,
    width: 37,
    height: 37,
    position: "absolute",
  },
  tiscoiconslinearcartAddParent: {
    height: 37,
    left: 70,
  },
  tiscoiconslinearcartAddGroup: {
    left: 255,
    height: 37,
  },
  rectangleView: {
    left: 10,
  },
  vinilosChild1: {
    left: 195,
  },
  tiscoiconslinearcartAddContainer: {
    left: 70,
  },
  groupView: {
    left: 255,
  },
  vinilosChild2: {
    top: 106,
    left: 21,
    backgroundColor: Color.colorDarkslategray_200,
    width: 218,
    height: 53,
    borderRadius: Border.br_21xl,
    position: "absolute",
  },
  mediacontrol38Icon: {
    top: 291,
    left: 110,
  },
  mediacontrol45Icon: {
    top: 292,
    left: 292,
  },
  mediacontrol40Icon: {
    top: 516,
    left: 114,
  },
  mediacontrol41Icon: {
    top: 513,
    left: 300,
  },
  arrowIcon: {
    left: 14,
    width: 37,
    overflow: "hidden",
  },
  searchIcon: {
    top: 120,
    left: 39,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  shoppingCartIcon: {
    top: 113,
    left: 286,
    width: 39,
    height: 39,
    position: "absolute",
    overflow: "hidden",
  },
  whatsappImage20240305At5: {
    marginLeft: 120,
    width: 49,
    left: "50%",
  },
  vinilosChild3: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    width: 360,
    height: 640,
  },
  nombre: {
    left: 142,
    fontSize: FontSize.size_lg,
    fontStyle: "italic",
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: "#fff",
    textAlign: "left",
    top: 363,
    position: "absolute",
  },
  vinilosChild4: {
    top: 97,
    left: 62,
    height: 243,
    width: 230,
    borderRadius: Border.br_21xl,
    position: "absolute",
    backgroundColor: Color.colorGainsboro_200,
  },
  groupChild: {
    backgroundColor: "rgba(46, 46, 46, 0.63)",
    borderColor: "rgba(46, 46, 46, 0.47)",
    borderWidth: 1,
    borderRadius: Border.br_21xl,
    borderStyle: "solid",
  },
  unionChild: {
    height: "100%",
    top: "112.61%",
    right: "-9.91%",
    bottom: "-112.61%",
    left: "9.91%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupItem: {
    right: "-17.09%",
    left: "68.38%",
  },
  groupInner: {
    right: "68.38%",
    left: "-17.09%",
  },
  rectangleGroup: {
    height: "30.03%",
    width: "35.14%",
    top: "47.45%",
    right: "22.22%",
    bottom: "22.52%",
    left: "42.64%",
    position: "absolute",
  },
  union: {
    width: 33,
    height: 33,
    backgroundColor: Color.colorGainsboro_200,
  },
  mediacontrol35: {
    marginLeft: -19,
    left: "50%",
    position: "absolute",
  },
  mediacontrol17Icon: {
    height: 40,
    width: 40,
    top: 53,
    overflow: "hidden",
  },
  mediacontrol18Icon: {
    left: 161,
    position: "absolute",
  },
  lineView: {
    top: 100,
    borderColor: Color.colorGainsboro_200,
    borderTopWidth: 1,
    width: 172,
    height: 1,
    borderStyle: "solid",
  },
  vinilosInner1: {
    marginLeft: -113,
    top: 351,
    height: 156,
    width: 230,
    left: "50%",
    position: "absolute",
  },
  vinilos: {
    flex: 1,
    overflow: "hidden",
    height: 640,
    backgroundColor: Color.colorGainsboro_200,
  },
});

export default Vinilos1;
