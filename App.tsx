import { StatusBar } from 'expo-status-bar';
import React, {/*ChangeEvent,*/ useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
//import { Input } from 'react-native-elements';

export default function App() {
  const [myItem, setMyItem] = useState<string>("0");

  // const onChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setMyItem(e.target.value);
  // };

  return (
    <View style={styles.container}>
      <StatusBar hidden={false} backgroundColor="#00BCD4" translucent={true}/>
      <Text style={styles.text}>Net Cost Calculator</Text>
      <Text style={styles.label}>Student Age</Text>
      <TextInput 
        keyboardType={"numeric"} 
        style={styles.textInput} 
        value={myItem} 
        onChangeText={myItem => setMyItem(myItem)}
        placeholder={myItem}
        underlineColorAndroid='transparent'
      />
      <Text style={styles.textOutput}>{myItem}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    marginTop: 10
  },
  label: {
    color: '#FFF',
    fontSize: 15
  },
  text: {
    fontSize: 30,
    color: '#0aa',
    textAlign: 'center',
    backgroundColor: '#005662',
    marginBottom: 5,
    marginTop: 30
  },
  textInput: {
    fontSize: 25,
    width: "50%",
    marginLeft: "25%",
    marginRight: "25%",
    backgroundColor: '#444',
    color: '#08d'
  },
  textOutput: {
    color: '#fff'
  }
});
