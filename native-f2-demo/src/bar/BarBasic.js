import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import F2charts from 'native-f2charts';

export default class BarBasic extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Bar (Column) - Basic`,
  });
  constructor(props) {
    super(props);
    const data = [
      { tem: 10, city: 'tokyo' },
      { tem: 4, city: 'newYork' },
      { tem: 3, city: 'berlin' }
    ];
    this.state = {
      data,
      option : `
        var data = ${JSON.stringify(data)};
        chart.source(data, {
          tem: {
            tickCount: 5
          }
        });
        /* 配置刻度文字大小，供PC端显示用(移动端可以使用默认值20px) */
        chart.axis('city', {
          label: {
            fontSize: 14
          },
          grid: null
        });
        chart.axis('tem', {
          label: {
            fontSize: 14
          }
        });
        chart.interval().position('city*tem').color('city');
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