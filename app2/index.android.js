import React from 'react';
import {Text, AppRegistry, View, Image, TouchableOpacity, Alert } from 'react-native';

const Estilos = {
  principal:{
    flex: 1,
    justifyContent : 'center',
    alignItems : 'center'
  },
  botao:{
    backgroundColor: '#538530',
    paddingVertical:10,
    paddingHorizontal: 30,
    marginTop: 20
  },
  textoBotao:{
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
};

const gerarNovaFrase = () => {
  var random = Math.random();
  random = Math.floor(random*5);

  var frases = Array();
  frases[0] = "Sonhe grande, cerque-se de pessoas melhores do que você e trate todo mundo da forma como gostaria de ser tratado."
  frases[1] = 'Sempre que você pensa que pode, ou que não pode, você está certo.'
  frases[2] = 'Daqui a vinte anos você estará mais desapontado pelas coisas que você não fez do que pelas que você fez errado. Então jogue as cartas. Navegue para longe do porto seguro. Pegue os ventos do destino. Explore. Sonhe. Descubra.'
  frases[3] = 'Melhor ficar no vermelho uma vez do que no amarelo a vida inteira'
  frases[4] = 'Se falta de tempo realmente fosse uma justificativa pra não realizar os seus projetos, somente os desocupados teriam sucesso.'
  var frase = frases[random]
  Alert.alert(
  'FRASE DE HOJE',
  frase,
  [
    {text: 'OK', onPress: () => console.log('OK Pressed')}
  ],
  { cancelable: true }
)
}

// Criar o componente
const App = () => {
  const {principal, botao, textoBotao} = Estilos;
  return (
    <View style={principal}>
      <Image source={require('./img/logo.png')} />
      <TouchableOpacity 
        onPress={gerarNovaFrase}
        style={botao}>
        <Text style={textoBotao}>Nova Frase </Text>
      </TouchableOpacity>
    </View>
  );
};

//Renderizar para o dispositivo
AppRegistry.registerComponent('app2', () => App);