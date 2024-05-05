import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const Registro = () => {
  return (
    <View style={styles.registro}>
      <View style={[styles.registroChild, styles.registroChildPosition]} />
      <Image
        style={[styles.eyeOffIcon, styles.eyeIconLayout]}
        contentFit="cover"
        source={require("../assets/eyeoff.png")}
      />
      <Image
        style={[styles.eyeIcon, styles.eyeIconLayout]}
        contentFit="cover"
        source={require("../assets/eye.png")}
      />
      <View style={[styles.singInWrapper, styles.registroChildPosition]}>
        <Text style={styles.singIn}>{`Sing in `}</Text>
      </View>
      <View style={[styles.nombreParent, styles.parentLayout]}>
        <Text style={[styles.nombre, styles.nombreTypo]}>Nombre</Text>
        <View style={[styles.groupChild, styles.lineViewPosition]} />
      </View>
      <View style={[styles.emailParent, styles.parentLayout]}>
        <Text style={[styles.nombre, styles.nombreTypo]}>Email</Text>
        <View style={[styles.groupChild, styles.lineViewPosition]} />
      </View>
      <View style={[styles.passwordParent, styles.parentLayout]}>
        <Text style={[styles.nombre, styles.nombreTypo]}>Password</Text>
        <View style={[styles.groupChild, styles.lineViewPosition]} />
      </View>
      <View style={styles.repitePasswordParent}>
        <Text style={[styles.nombre, styles.nombreTypo]}>Repite password</Text>
        <View style={[styles.lineView, styles.lineViewPosition]} />
      </View>
      <Text style={[styles.createAccount, styles.nombreTypo]}>
        Create account
      </Text>
      <Image
        style={[styles.userCircleIcon, styles.registroChildPosition]}
        contentFit="cover"
        source={require("../assets/usercircle.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  registroChildPosition: {
    position: "absolute",
    left: "50%",
  },
  eyeIconLayout: {
    height: 24,
    width: 24,
    top: 383,
    position: "absolute",
    overflow: "hidden",
  },
  parentLayout: {
    height: 29,
    width: 258,
    left: 44,
    position: "absolute",
  },
  nombreTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    fontStyle: "italic",
    position: "absolute",
  },
  lineViewPosition: {
    height: 2,
    width: 260,
    borderTopWidth: 2,
    borderColor: Color.colorDarkslategray_200,
    borderStyle: "solid",
    marginLeft: -130,
    left: "50%",
    position: "absolute",
  },
  registroChild: {
    marginLeft: -154,
    top: 178,
    borderRadius: Border.br_21xl,
    backgroundColor: "rgba(226, 226, 226, 0.28)",
    width: 295,
    height: 324,
    left: "50%",
  },
  eyeOffIcon: {
    left: 281,
  },
  eyeIcon: {
    left: 251,
  },
  singIn: {
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorGray_100,
    textAlign: "left",
    fontStyle: "italic",
  },
  singInWrapper: {
    marginLeft: -89,
    top: 554,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorDarkslategray_200,
    width: 178,
    height: 47,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: Padding.p_3xs,
    left: "50%",
  },
  nombre: {
    top: 0,
    left: 0,
    color: Color.colorDarkslategray_300,
  },
  groupChild: {
    top: 28,
  },
  nombreParent: {
    top: 256,
  },
  emailParent: {
    top: 321,
  },
  passwordParent: {
    top: 382,
  },
  lineView: {
    top: 33,
  },
  repitePasswordParent: {
    top: 443,
    height: 34,
    width: 258,
    left: 44,
    position: "absolute",
  },
  createAccount: {
    marginLeft: -113,
    top: 198,
    color: Color.colorDarkslategray_200,
    width: 213,
    height: 35,
    left: "50%",
  },
  userCircleIcon: {
    marginLeft: -60,
    top: 35,
    width: 120,
    height: 120,
    left: "50%",
    overflow: "hidden",
  },
  registro: {
    backgroundColor: Color.colorGainsboro_200,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default Registro;
