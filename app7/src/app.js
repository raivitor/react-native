import React, { Component } from 'react';
import {View} from 'react-native';

import Topo from './components/topo'
import Resultado from './components/resultado'
import Painel from './components/painel'

export default props => (
  <View>
    <Topo />
    <Resultado />
    <Painel />
  </View>
);