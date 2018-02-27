/*
  2018 becarchal
*/

'use strict'

import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet, View, Button, Dimensions, ListView } from 'react-native'
import { StackNavigator} from 'react-navigation';

import PointBasic from './point/PointBasic';
import PointBubble from './point/PointBubble';

import LineBasic from './line/LineBasic';
import LineSmooth from './line/LineSmooth';
import LineAnimation from './line/LineAnimation';
import LineDynamic from './line/LineDynamic';

import AreaBasic from './area/AreaBasic';
import AreaStack from './area/AreaStack';
import AreaStackLine from './area/AreaStackLine';
import AreaShade from './area/AreaShade';
import AreaNeg from './area/AreaNeg';

import BarBasic from './bar/BarBasic';
import BarType from './bar/BarType';
import BarJadeLack from './bar/BarJadeLack';
import BarAnimation from './bar/BarAnimation';

import PieBasic from './pie/PieBasic';
import PieLabel from './pie/PieLabel';
import PieAnnular from './pie/PieAnnular';
import PieRose from './pie/PieRose';
import PieNestAnnular from './pie/PieNestAnnular';

import RadarBasic from './radar/RadarBasic';
import RadarZone from './radar/RadarZone';

import DoubleY from './other/DoubleY';
import DashBoard from './other/DashBoard';

const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },
});

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'native-F2charts Example App',
  };
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        {
          route: 'PointBasic',
          title: 'Point (Column) - Basic'
        },
        {
          route: 'PointBubble',
          title: 'Point (Column) - Bubble'
        },
        {
          route: 'LineBasic',
          title: 'Line (Column) - Basic'
        },
        {
          route: 'LineSmooth',
          title: 'Line (Column) - Smooth'
        },
        {
          route: 'LineAnimation',
          title: 'Line (Column) - Animation'
        },
        {
          route: 'LineDynamic',
          title: 'Line (Column) - Dynamic'
        },
        {
          route: 'AreaBasic',
          title: 'Area (Column) - Basic'
        },
        {
          route: 'AreaStack',
          title: 'Area (Column) - Stack'
        },
        {
          route: 'AreaStackLine',
          title: 'Area (Column) - StackLine'
        },
        {
          route: 'AreaShade',
          title: 'Area (Column) - Shade'
        },
        {
          route: 'AreaNeg',
          title: 'Area (Column) - Neg'
        },
        {
          route: 'BarBasic',
          title: 'Bar (Column) - Basic'
        },
        {
          route: 'BarType',
          title: 'Bar (Column) - Type'
        },
        {
          route: 'BarJadeLack',
          title: 'Bar (Column) - JadeLack'
        },
        {
          route: 'BarAnimation',
          title: 'Bar (Column) - Animation'
        },
        {
          route: 'PieBasic',
          title: 'Pie (Column) - Basic'
        },
        // {
        //   route: 'PieLabel',
        //   title: 'Pie (Column) - Label'
        // },
        {
          route: 'PieAnnular',
          title: 'Pie (Column) - Annular'
        },
        {
          route: 'PieRose',
          title: 'Pie (Column) - Rose'
        },
        {
          route: 'PieNestAnnular',
          title: 'Pie (Column) - NestAnnular'
        },
        {
          route: 'RadarBasic',
          title: 'Radar (Column) - Basic'
        },
        {
          route: 'RadarZone',
          title: 'Radar (Column) - Zone'
        },
        {
          route: 'DoubleY',
          title: 'DoubleY'
        },
        {
          route: 'DashBoard',
          title: 'DashBoard'
        },
      ]),
    };
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => 
          <Button
            style={styles.container}
            onPress={() => navigate(rowData.route)}
            title={rowData.title}
          />
        }
      />
    ); 
  }
}

const App = StackNavigator({
  Home: { screen: HomeScreen },
  PointBasic: { screen: PointBasic },
  PointBubble: { screen: PointBubble },
  LineBasic: { screen: LineBasic },
  LineSmooth: { screen: LineSmooth },
  LineAnimation: { screen: LineAnimation },
  LineDynamic: { screen: LineDynamic },
  AreaBasic: { screen: AreaBasic },
  AreaStack: { screen: AreaStack },
  AreaStackLine: { screen: AreaStackLine },
  AreaShade: { screen: AreaShade },
  AreaNeg: { screen: AreaNeg },
  BarBasic: { screen: BarBasic },
  BarType: { screen: BarType },
  BarJadeLack: { screen: BarJadeLack },
  BarAnimation: { screen: BarAnimation },
  PieBasic: { screen: PieBasic },
  PieLabel: { screen: PieLabel },
  PieAnnular: { screen: PieAnnular },
  PieRose: { screen: PieRose },
  PieNestAnnular: { screen: PieNestAnnular },
  RadarBasic: { screen: RadarBasic },
  RadarZone: { screen: RadarZone },
  DoubleY: { screen: DoubleY },
  DashBoard: { screen: DashBoard },
});

AppRegistry.registerComponent('App', () => App);
export default App;
