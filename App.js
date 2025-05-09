import { StatusBar } from 'expo-status-bar';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (<>
    <StatusBar style="yellow" />
    <SafeAreaView style={{flex: 1}}>
    
      {/* <ImageBackground style={{flex: 1}} source={require("./assets/splash.png")} resizeMode="repeat"> */}
        <View style={styles.container}>
          <Text>que tal</Text>
        </View>
     {/* </ImageBackground> */}
    </SafeAreaView></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#f00",
  },
});
