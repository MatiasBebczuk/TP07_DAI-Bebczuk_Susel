import { StatusBar } from 'expo-status-bar';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert, Pressable } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [mensaje, setMensaje] = useState("");
  const [tema, setTema] = useState(true);
  const [hover, setHover] = useState(false);
  return (<>
    <StatusBar style="dark" />
    <ImageBackground style={{flex: 1}} source={require("./assets/backgroundcolor.png")} resizeMode="repeat">
      <SafeAreaView style={{flex: 1, justifyContent: "center", paddingHorizontal: 20}}>
    
        <View style={styles.container}>
          <Image source={require("./assets/user.png")}/>
          <Text style={tema ? styles.nombre1 : styles.nombre2}>Leo Messi</Text>
          <Text style={tema ? styles.titulo1 : styles.titulo2}>(MicrosYA Admin)</Text>

          <TextInput onChangeText={setMensaje} placeholder="Enviar mensaje"/>
          <TouchableOpacity style={styles.btn} onPress={() => Alert.alert(mensaje)}>
            <Text style={{color: "#fff"}}>Contactar</Text>
          </TouchableOpacity>

          <Pressable
          style={[styles.btn, hover ? styles.btn3 : styles.btn2]}
          onPress={() => setTema(!tema)}
          OnPressIn={() => setHover(true)}
          onPressOut={() => setHover(false)}>
            <Text style={{color: "#fff"}}>Ver perfil</Text>
          </Pressable>
        </View>

      </SafeAreaView> 
    </ImageBackground>
  </>);
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: "black",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: "#fff"
  },
  btn: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#00f"
  },
  btn2: {
    marginTop: 5,
    backgroundColor: "#0f0"
  },
  btn3: {
    marginTop: 5,
    backgroundColor: "#11cf11"
  },
  nombre1: {fontFamily: "sans-serif", fontStyle: "bold", fontSize: 20},
  nombre2: {fontFamily: "comic sans ms", fontSize: 15},
  titulo1: {fontStyle: "italic", fontSize: 16},
  titulo2: {fontStyle: "bold", fontSize: 10}
});
