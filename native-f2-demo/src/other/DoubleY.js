import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import F2charts from 'native-f2charts';

export default class DoubleY extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Bar Line (Column) - Double`,
  });
  constructor(props) {
    super(props);
    const data = [
      { time: '周一', tem: 6.9, rain: 10 },
      { time: '周二', tem: 9.5, rain: 13 },
      { time: '周三', tem: 14.5, rain: 14 },
      { time: '周四', tem: 18.2, rain: 10 },
      { time: '周五', tem: 21.5, rain: 12 },
      { time: '周六', tem: 25.2, rain: 16 },
      { time: '周日', tem: 26.5, rain: 13 }
    ];
    this.state = {
      data,
      option : `
        var data = ${JSON.stringify(data)};
        chart.source(data, {
          tem: {
            tickCount: 5,
            max: 30,
            min: 0
          },
          rain: {
            tickCount: 5,
            min: 0,
            max: 30
          }
        });
      
        /* 配置刻度文字大小，供PC端显示用(移动端可以使用默认值20px) */
        chart.axis('time', {
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
        chart.axis('rain', {
          label: {
            fontSize: 14
          }
        });
        chart.interval().position('time*tem');
        chart.line().position('time*rain')
          .color('#5ed470')
          .size(2)
          .shape('smooth');
        chart.point().position('time*rain').color('#5ed470');
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