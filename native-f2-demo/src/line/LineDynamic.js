import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import F2charts from 'native-f2charts';

export default class LineDynamic extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Line (Column) - Dynamic`,
  });
  constructor(props) {
    super(props);
    const data = [];
    this.state = {
      data,
      option : `
        var data = ${JSON.stringify(data)};
        /* 添加数据，模拟数据，可以指定当前时间的偏移的秒 */
        function getRecord(offset) {
          offset = offset || 0;
          return {
            time: new Date().getTime() + offset * 1000,
            value: Math.random() + 10
          };
        }
      
        data.push(getRecord(-2));
        data.push(getRecord(-1));
        data.push(getRecord());
      
        var defs = {
          time: {
            type: 'timeCat',
            mask: 'hh:mm:ss',
            tickCount: 5,
            range: [ 0, 1 ]
          },
          value: {
            tickCount: 5,
            min: 8
          }
        };
        /* 配置刻度文字大小，供PC端显示用(移动端可以使用默认值20px) */
        chart.axis('value', {
          label: {
            fontSize: 14
          }
        });
        chart.axis('time', {
          label: {
            fontSize: 14
          }
        });
        chart.source(data, defs);
        chart.line().position('time*value');
        chart.render();
      
        setInterval(function() {
          data.push(getRecord());
          chart.changeData(data);
        }, 2000);`,
      text: 'test'
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native F2charts
        </Text>
        <F2charts option={this.state.option} height={300} width={330} datasource={[1,2]}/>
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