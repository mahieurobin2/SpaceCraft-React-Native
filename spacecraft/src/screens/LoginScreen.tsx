import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Headline, TextInput } from 'react-native-paper';
import * as React from 'react';
import { Button } from 'react-native-paper';
import { redA700 } from 'react-native-paper/lib/typescript/styles/colors';


export default function LogginScreen() {
  const [text, setText] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    // using <> is just like using <React.Fragment>
    <>
    <View style={styles.container}>
      <View style={styles.header}>   
         <Headline style={styles.headline}>Welcome to SpaceCraft</Headline>
    </View>
      <TextInput
       label="Email"
        value={text}
        onChangeText={text => setText(text)}
      />
      <TextInput
       label="Password"
        value={password}
        onChangeText={password => setPassword(password)}
      />
  <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
    Login
  </Button> 
    </View>
</>
// using </> is just like using </React.Fragment>
  );
}

const styles = StyleSheet.create({
  header:{
    height:200,
    backgroundColor: "purple",
    justifyContent:'center',
    alignItems:'center',
  },

  headline: {
    color:"white",
  }
});