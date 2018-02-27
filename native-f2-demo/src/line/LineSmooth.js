import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import F2charts from 'native-f2charts';

export default class LineSmooth extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Line (Column) - Smooth`,
  });
  constructor(props) {
    super(props);
    const data = [
      { time: '周一', tem: 10, city: 'beijing' },
      { time: '周二', tem: 22, city: 'beijing' },
      { time: '周三', tem: 20, city: 'beijing' },
      { time: '周四', tem: 26, city: 'beijing' },
      { time: '周五', tem: 20, city: 'beijing' },
      { time: '周六', tem: 26, city: 'beijing' },
      { time: '周日', tem: 28, city: 'beijing' },
      { time: '周一', tem: 5, city: 'newYork' },
      { time: '周二', tem: 12, city: 'newYork' },
      { time: '周三', tem: 26, city: 'newYork' },
      { time: '周四', tem: 20, city: 'newYork' },
      { time: '周五', tem: 28, city: 'newYork' },
      { time: '周六', tem: 26, city: 'newYork' },
      { time: '周日', tem: 20, city: 'newYork' }
    ];
    this.state = {
      data,
      option : `
        var data = ${JSON.stringify(data)};
        var defs = {
          time: {
            tickCount: 7,
            range: [ 0, 1 ]
          },
          tem: {
            tickCount: 5,
            min: 0
          }
        };
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
          /* 配置刻度文字大小，供PC端显示用(移动端可以使用默认值20px) */
        chart.axis('tem', {
          label: {
            fontSize: 14
          }
        });
        chart.source(data, defs);
        chart.line().position('time*tem')
          .color('city')
          .shape('smooth');
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