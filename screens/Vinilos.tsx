import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, Border } from "../GlobalStyles";

const Vinilos = () => {
  return (
    <View style={styles.vinilos}>
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
        style={[styles.mediacontrol38Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/mediacontrol-38.png")}
      />
      <Image
        style={[styles.mediacontrol45Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/mediacontrol-38.png")}
      />
      <Image
        style={[styles.mediacontrol40Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/mediacontrol-38.png")}
      />
      <Image
        style={[styles.mediacontrol41Icon, styles.iconLayout]}
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
    </View>
  );
};

const styles = StyleSheet.create({
  vinilosLayout: {
    height: 150,
    width: 151,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_mini,
    top: 200,
    position: "absolute",
  },
  tiscoiconslinearcartLayout1: {
    height: 37,
    width: 84,
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
  iconLayout: {
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
  vinilosChild: {
    marginLeft: -175.2,
    top: 73,
    borderStyle: "solid",
    borderColor: Color.colorGray_100,
    borderTopWidth: 2.5,
    width: 350,
    height: 3,
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
    width: 37,
    height: 37,
    position: "absolute",
  },
  tiscoiconslinearcartMinus: {
    left: 47,
    top: 0,
    width: 37,
    height: 37,
    position: "absolute",
  },
  tiscoiconslinearcartAddParent: {
    left: 70,
  },
  tiscoiconslinearcartAddGroup: {
    left: 255,
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
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorDarkslategray_200,
    width: 218,
    height: 53,
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
  vinilos: {
    backgroundColor: Color.colorGainsboro_200,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default Vinilos;
