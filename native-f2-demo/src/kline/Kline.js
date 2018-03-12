import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import F2charts from 'native-f2charts';
import dataJson from './data.json';

export default class Kline extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Kline (Column) - Basic`,
  });
  constructor(props) {
    super(props);
    this.state = {
      data: dataJson,
      option : `
        var data = ${JSON.stringify(dataJson)};
        data = data.slice(0, 100);  /* 仅显示100 个 */
        /* 数据处理 */
        data.sort(function(obj1, obj2) {
          return obj1.time > obj2.time ? 1 : -1;
        });
        data.forEach(function(obj) {
          obj.range = [ obj.start, obj.end, obj.max, obj.min ];
          obj.trend = (obj.start <= obj.end) ? 0 : 1;
        });
        /* 配置刻度文字大小，供PC端显示用(移动端可以使用默认值20px) */
        chart.axis('range', {
          label: {
            fontSize: 14
          }
        });
        /* 配置time刻度文字样式 */
        var label = {
          fill: '#979797',
          font: '14px san-serif',
          offset: 6
        };
        chart.axis('time', {
          label(text, index, total) {
            var cfg = label;
            /* 第一个点左对齐，最后一个点右对齐，其余居中，只有一个点时左对齐 */
            if (index === 0) {
              cfg.textAlign = 'start';
            }
            if (index > 0 && index === total - 1) {
              cfg.textAlign = 'end';
            }
            return cfg;
          }
        });
        chart.source(data, {
          range: {
            tickCount: 5
          },
          time: {
            tickCount: 3
          }
        });
        chart.schema().position('time*range')
          .color('trend', function(trend) {
            return [ '#C00000', '#19B24B' ][trend];
          })
          .shape('candle');
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