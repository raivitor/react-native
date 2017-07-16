import React from 'react';
import {Text, AppRegistry} from 'react-native';

const Estilos = {
  estiloTexto:{
    fontSize: 30,
    backgroundColor: '#08509b'
  }
};

// Criar o componente
const App = () => {
  return (
    <Text style={Estilos.estiloTexto}>Frases do dia</Text>
  );
};

//Renderizar para o dispositivo
AppRegistry.registerComponent('app2', () => App);