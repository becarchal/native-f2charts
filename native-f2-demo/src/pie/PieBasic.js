import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import F2charts from 'native-f2charts';

export default class PieBasic extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Pie (Column) - Basic`,
  });
  constructor(props) {
    super(props);
    const data = [
      {a: '1', b: 0.3, c: '1'},
      {a: '1', b: 0.3, c: '2'},
      {a: '1', b: 0.4, c: '3'}
    ];
    this.state = {
      data,
      option : `
        var data = ${JSON.stringify(data)};
        chart.source(data);
      
        chart.coord('polar', {
          transposed: true,
          inner: 0
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