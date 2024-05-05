import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Padding, Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const FrameComponentSet = () => {
  return (
    <View style={styles.estadodefaultParent}>
      <View style={[styles.estadodefault, styles.estadodefaultFlexBox]}>
        <Text style={[styles.singIn, styles.singTypo]}>{`Sing in `}</Text>
      </View>
      <View style={[styles.estadopressed, styles.estadodefaultFlexBox]}>
        <Text style={[styles.singIn1, styles.singTypo]}>Sing in</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  estadodefaultFlexBox: {
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 35,
    width: 99,
    left: 26,
    position: "absolute",
    borderRadius: Border.br_8xs,
  },
  singTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontStyle: "italic",
    fontSize: FontSize.size_lg,
  },
  singIn: {
    color: Color.colorGray_100,
  },
  estadodefault: {
    top: 24,
    backgroundColor: "#434343",
  },
  singIn1: {
    color: "#fffcfc",
  },
  estadopressed: {
    top: 97,
    backgroundColor: "#09090a",
  },
  estadodefaultParent: {
    borderStyle: "dashed",
    borderColor: "#9747ff",
    borderWidth: 1,
    width: 280,
    height: 148,
    overflow: "hidden",
    borderRadius: Border.br_8xs,
  },
});

export default FrameComponentSet;
