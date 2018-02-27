import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import F2charts from 'native-f2charts';

export default class RadarZone extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Radar (Column) - Zone`,
  });
  constructor(props) {
    super(props);
    const data = [
      {name: '张飞',props: '智力', value: 65},
      {name: '张飞',props: '武力', value: 97},
      {name: '张飞',props: '政治', value: 50},
      {name: '张飞',props: '统帅', value: 92},
      {name: '张飞',props: '忠诚', value: 100},
      {name: '关羽',props: '智力', value: 80},
      {name: '关羽',props: '武力', value: 94},
      {name: '关羽',props: '政治', value: 70},
      {name: '关羽',props: '统帅', value: 95},
      {name: '关羽',props: '忠诚', value: 99}
    ];
    this.state = {
      data,
      option : `
        var data = ${JSON.stringify(data)};
        chart.coord('polar');
        chart.source(data, {
          value: {
            min: 0,
            tickInterval: 20
          }
        });
      
        /* 配置刻度文字大小，供PC端显示用(移动端可以使用默认值20px) */
        chart.axis('props', {
          label: {
            fontSize: 14
          },
          line: null
        });
        chart.axis('value', {
          label: {
            fontSize: 14
          }
        });
      
        chart.area().position('props*value').color('name').style({
          opacity: 0.6
        });
        /* x和y轴同时缩放的动画 */
        chart.animate({
          type: 'scalexy'
        });
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