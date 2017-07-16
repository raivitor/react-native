import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';

import Topo from './src/components/topo';
import Icone from './src/components/icone';

class app3 extends Component{
  constructor(props) {
    super(props);
    this.state = {escolhaUsuario: '', escolhaComputador: '', resultado : '' }  
  }

  jokenpo(escolhaUsuario_){
    const random = Math.floor(Math.random() * 3);
    let escolhaPc = '';

    switch(random){
      case 0: escolhaPc = 'pedra'; break;
      case 1: escolhaPc = 'papel'; break;
      case 2: escolhaPc = 'tesoura'; break;
    }

    let resultado = '';

    if(escolhaPc == 'pedra'){
      if(escolhaUsuario_ == 'pedra'){
        resultado = 'Empate';
      }

      if(escolhaUsuario_ == 'papel'){
        resultado = 'Usuário ganhou';
      }

      if(escolhaUsuario_ == 'tesoura'){
        resultado = 'Computador ganhou';
      }
    }

    if(escolhaPc == 'papel'){
      if(escolhaUsuario_ == 'papel'){
        resultado = 'Empate';
      }

      if(escolhaUsuario_ == 'tesoura'){
        resultado = 'Usuário ganhou';
      }

      if(escolhaUsuario_ == 'pedra'){
        resultado = 'Computador ganhou';
      }
    }

    if(escolhaPc == 'tesoura'){
      if(escolhaUsuario_ == 'tesoura'){
        resultado = 'Empate';
      }

      if(escolhaUsuario_ == 'pedra'){
        resultado = 'Usuário ganhou';
      }

      if(escolhaUsuario_ == 'papel'){
        resultado = 'Computador ganhou';
      }
    }

    this.setState ({escolhaUsuario : escolhaUsuario_,
      escolhaComputador: escolhaPc,
      resultado : resultado
    });
  }

  render(){
    return (
      <View>
        <Topo />

        <View style={styles.painelAcoes}>
          <View style={styles.btnEscolha}><Button title="pedra" onPress={() => {this.jokenpo('pedra')}}/></View>
          <View style={styles.btnEscolha}><Button title="papel" onPress={() => {this.jokenpo('papel')}}/></View>
          <View style={styles.btnEscolha}><Button title="tesoura" onPress={() => {this.jokenpo('tesoura')}}/></View>
        </View>

        <View style={styles.palco}>
          <Text style={styles.txtResultado}>{this.state.resultado}</Text>
          <Icone escolha={this.state.escolhaComputador} jogador='Computador' />
          <Icone escolha={this.state.escolhaUsuario} jogador='Você' />
        </View>

      </View>
      );
  }
}

const styles = StyleSheet.create({
  btnEscolha: {
    width: 90
  },
  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  palco: {
    alignItems: 'center',
    marginTop: 10
  },
  txtResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60
  }
});
AppRegistry.registerComponent('app3', () => app3);