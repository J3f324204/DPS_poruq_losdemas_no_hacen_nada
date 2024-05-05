const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import FrameComponentSet from "./components/FrameComponentSet";
import Inicio from "./screens/Inicio";
import Bienvenida from "./screens/Bienvenida";
import Registro from "./screens/Registro";
import PaginaPrincipal from "./screens/PaginaPrincipal";
import Carrito from "./screens/Carrito";
import Carrito1 from "./screens/Carrito1";
import ConfirmacionDePago from "./screens/ConfirmacionDePago";
import PagoRealizado from "./screens/PagoRealizado";
import Vinilos from "./screens/Vinilos";
import Vinilos1 from "./screens/Vinilos1";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "IstokWeb-BoldItalic": require("./assets/fonts/IstokWeb-BoldItalic.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Inicio"
              component={Inicio}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Bienvenida"
              component={Bienvenida}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Registro"
              component={Registro}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PaginaPrincipal"
              component={PaginaPrincipal}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Carrito"
              component={Carrito}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Carrito1"
              component={Carrito1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ConfirmacionDePago"
              component={ConfirmacionDePago}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PagoRealizado"
              component={PagoRealizado}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Vinilos"
              component={Vinilos}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Vinilos1"
              component={Vinilos1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
