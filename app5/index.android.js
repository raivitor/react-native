import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';

import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';

export default class app5 extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ id: 'a' }}
        renderScene={(route, navigator) => {
          /* definir a cena com base na rota */
          if (route.id === 'a') {
            //exibir a cenaPrincipal
            return (<CenaPrincipal navigator={navigator} />);
          }

          if (route.id === 'b') {
            //exibir a cenaClientes
            return (<CenaClientes navigator={navigator} />);
          }
        }}
      />
    );
  }
}

AppRegistry.registerComponent('app5', () => app5);
