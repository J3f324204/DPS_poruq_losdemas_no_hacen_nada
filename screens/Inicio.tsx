import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Border, Color, Padding } from "../GlobalStyles";

const Inicio = () => {
  return (
    <View style={styles.inicio}>
      <View style={[styles.inicioChild, styles.childPosition]} />
      <Text style={styles.singIn}>Sing In</Text>
      <View style={styles.singInWrapper}>
        <Text style={[styles.singIn1, styles.singIn1Typo]}>{`Sing in `}</Text>
      </View>
      <Text style={[styles.createAccount, styles.singIn1Typo]}>
        Create account
      </Text>
      <View style={styles.emailParent}>
        <Text style={[styles.email, styles.emailTypo]}>Email</Text>
        <View style={[styles.groupChild, styles.childPosition]} />
      </View>
      <View style={styles.passwordParent}>
        <Text style={[styles.password, styles.emailTypo]}>Password</Text>
        <View style={[styles.groupChild, styles.childPosition]} />
      </View>
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
      <Image
        style={[styles.userCircleIcon, styles.childPosition]}
        contentFit="cover"
        source={require("../assets/usercircle.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  childPosition: {
    left: "50%",
    position: "absolute",
  },
  singIn1Typo: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontStyle: "italic",
  },
  emailTypo: {
    left: 0,
    top: 0,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontStyle: "italic",
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  eyeIconLayout: {
    height: 24,
    width: 24,
    top: 383,
    position: "absolute",
    overflow: "hidden",
  },
  inicioChild: {
    marginLeft: -147,
    top: 191,
    borderRadius: Border.br_21xl,
    width: 295,
    height: 324,
    backgroundColor: Color.colorGainsboro_100,
  },
  singIn: {
    marginLeft: -40,
    top: 229,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontStyle: "italic",
    fontSize: FontSize.size_5xl,
    color: Color.colorDarkslategray_200,
    left: "50%",
    position: "absolute",
  },
  singIn1: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorGray_100,
  },
  singInWrapper: {
    top: 530,
    left: 91,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkslategray_200,
    width: 178,
    height: 47,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: Padding.p_3xs,
    position: "absolute",
  },
  createAccount: {
    marginLeft: -62,
    bottom: 22,
    textDecoration: "underline",
    fontFamily: FontFamily.istokWebItalic,
    width: 125,
    height: 26,
    color: Color.colorDarkslategray_200,
    fontSize: FontSize.size_lg,
    left: "50%",
    position: "absolute",
  },
  email: {
    color: "rgba(51, 51, 51, 0.49)",
  },
  groupChild: {
    marginLeft: -130,
    top: 28,
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray_100,
    borderTopWidth: 2,
    width: 260,
    height: 2,
  },
  emailParent: {
    top: 306,
    height: 29,
    width: 258,
    left: 51,
    position: "absolute",
  },
  password: {
    color: "rgba(51, 51, 51, 0.48)",
  },
  passwordParent: {
    top: 383,
    height: 29,
    width: 258,
    left: 51,
    position: "absolute",
  },
  eyeOffIcon: {
    left: 281,
  },
  eyeIcon: {
    left: 251,
  },
  userCircleIcon: {
    marginLeft: -60,
    top: 55,
    width: 120,
    height: 120,
    overflow: "hidden",
  },
  inicio: {
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
    backgroundColor: Color.colorGainsboro_100,
  },
});

export default Inicio;
