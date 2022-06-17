/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image, StyleSheet, SafeAreaView, StatusBar, Text, Pressable, Linking} from 'react-native';

const defaultColor = '#010409';
const githubImage = 'https://avatars.githubusercontent.com/u/80966301?v=4';
const colorFontGithub = '#C9D1D9';
const colorDarkGithub = '#4F565E';
const myGithub = 'https://github.com/Davy-404';

const App = () => {

  const goGithub = async () => {
    console.log('Verificando link');
    const res = await Linking.canOpenURL(myGithub);
    if (res) {
      console.log('link aprovado');
      console.log('abrindo link...');
      await Linking.canOpenURL(myGithub);
    }
  };

  return (
    <SafeAreaView style={Style.container}>
      <StatusBar backgroundColor={defaultColor} barStyle="light-content" />
      <View style={Style.view}>
      
        <Image style={Style.avatar} source={{uri: githubImage}} />
      
        <Text accessibilityLabel='nome: Davy Geyson'
        style={[Style.defaultText, Style.name]}>Davy Geyson</Text>
        <Text accessibilityLabel='nickname: Davy_404'
        style={[Style.defaultText, Style.nickname]}>Davy_404</Text>
        <Text accessibilityLabel='descrição: Software enginer'
        style={[Style.defaultText, Style.drecription]}>Software enginer</Text>
        
        <Pressable onPress={goGithub}>
        <View style={Style.button}>
          <Text style={[Style.defaultText]}>Open in GitHub</Text>
        </View>
        </Pressable>
      
      </View>
    </SafeAreaView>
  );
};

export default App;

const Style = StyleSheet.create({
  container:{
    //column
    backgroundColor: '#010409',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // flexdirection: 'row',
  },
  view: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    height: 150,
    width: 150,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
  defaultText: {
    color: colorFontGithub,
  },
  name: {
    marginTop: 15,
    fontSize: 28,
    fontWeight: 'bold',
  },
  nickname: {
    fontSize: 18,
    color: colorDarkGithub,
  },
  drecription: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 100,
    backgroundColor: colorDarkGithub,
    borderRadius: 10,
    padding: 20,
  },
});
