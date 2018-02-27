import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import F2charts from 'native-f2charts';

export default class AreaNeg extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Area (Column) - Neg`,
  });
  constructor(props) {
    super(props);
    const data = [
      { month: 'Jan', value: 6.06 },
      { month: 'Feb', value: 82.2 },
      { month: 'Mar', value: -22.11 },
      { month: 'Apr', value: 21.53 },
      { month: 'May', value: -21.74 },
      { month: 'Jun', value: 73.61 },
      { month: 'Jul', value: 53.75 },
      { month: 'Aug', value: 60.32 }
    ];
    this.state = {
      data,
      option : `
        var data = ${JSON.stringify(data)};
        chart.source(data, {
          month: {
            range: [ 0, 1 ]
          },
          value: {
            tickCount: 5
          }
        });
          /* 配置刻度文字大小，供PC端显示用(移动端可以使用默认值20px) */
        chart.axis('value', {
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
        chart.axis('month', {
          line: null,
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
        chart.area({
          startOnZero: true /* X 轴从 0 开始 */
        }).position('month*value')
          .color('#FE6384')
          .style({
            opacity: 0.45
          });
        chart.line()
          .position('month*value')
          .color('#FE6384')
          .size(4);
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