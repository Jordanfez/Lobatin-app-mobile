import { View } from "react-native";
import { ChakraProvider } from '@chakra-ui/react'
import Home from "./screens/Home";

export default function Index() {
  return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Home/>
      </View>
  );
}
