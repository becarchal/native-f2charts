import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import F2charts from 'native-f2charts';

export default class AreaShade extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Area (Column) - Shade`,
  });
  constructor(props) {
    super(props);
    const data = [
      { time: '2016-08-08 00:00:00', tem: 10},
      { time: '2016-08-08 00:10:00', tem: 22},
      { time: '2016-08-08 00:30:00', tem: 16},
      { time: '2016-08-09 00:35:00', tem: 26},
      { time: '2016-08-09 01:00:00', tem: 12},
      { time: '2016-08-09 01:20:00', tem: 26},
      { time: '2016-08-10 01:40:00', tem: 18},
      { time: '2016-08-10 02:00:00', tem: 26},
      { time: '2016-08-10 02:20:00', tem: 12}
    ];
    this.state = {
      data,
      option : `
        var data = ${JSON.stringify(data)};
        chart.source(data, {
          time: {
            type: 'timeCat',
            tickCount: 3,
            range: [ 0, 1 ]
          },
          tem: {
            tickCount: 5,
            min: 0
          }
        });
          /* 配置刻度文字大小，供PC端显示用(移动端可以使用默认值20px) */
        chart.axis('tem', {
          label: {
            fontSize: 14
          }
        });
          /* 配置time刻度文字样式 */
        chart.axis('time', {
          label(text, index, total) {
            const cfg = {
              fill: '#979797',
              font: '14px san-serif',
              offset: 6
            };
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
        var canvas = document.getElementById('main');
        var ctx = canvas.getContext('2d');
        var grd = ctx.createLinearGradient(0,0,500,0);
        grd.addColorStop(0,"#293c55");
        grd.addColorStop(1,"#f7f7f7");
      
        chart.area().position('time*tem')
          .color(grd)
          .shape('smooth')
          .style({
            opacity: 0.6
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