import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import F2charts from 'native-f2charts';

export default class PieNestAnnular extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Pie (Column) - NestAnnular`,
  });
  constructor(props) {
    super(props);
    const data = [
      {a: '1', b: 0.2, c: '1'},
      {a: '2', b: 0.5, c: '1'},
      {a: '3', b: 0.4, c: '1'},
  
      {a: '1', b: 0.8, c: '2'},
      {a: '2', b: 0.5, c: '2'},
      {a: '3', b: 0.6, c: '2'}
    ];
    this.state = {
      data,
      option : `
        var data = ${JSON.stringify(data)};
        chart.source(data);
      
        chart.coord('polar', {
          transposed: true,
          inner: 0.5
        });
      
        chart.axis(false);
        chart.interval().position('a*b').color('c').adjust('stack');
        chart.render();`,
      text: 'test'
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native F2charts
        </Text>
        <F2charts option={this.state.option} height={300} width={330} datasource={this.state.data}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 30,
  }
});