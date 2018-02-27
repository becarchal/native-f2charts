import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import F2charts from 'native-f2charts';

export default class PointBasic extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Point (Column) - Basic`,
  });
  constructor(props) {
    super(props);
    const data = [
      {"time": '2016-08-08 00:00:00',"tem": 10},
      {"time": '2016-08-08 00:10:00',"tem": 22},
      {"time": '2016-08-08 00:30:00',"tem": 20},
      {"time": '2016-08-09 00:35:00',"tem": 26},
      {"time": '2016-08-09 01:00:00',"tem": 20},
      {"time": '2016-08-09 01:20:00',"tem": 26},
      {"time": '2016-08-10 01:40:00',"tem": 28},
      {"time": '2016-08-10 02:00:00',"tem": 20},
      {"time": '2016-08-10 02:20:00',"tem": 28}
    ];
    this.state = {
      data,
      option : `
        var data = ${JSON.stringify(data)};
        var defs = {
          time: {
            type: 'timeCat',
            tickCount: 3
          },
          tem: {
            tickCount: 5,
            min: 0
          }
        };
        /* 配置刻度文字大小，供PC端显示用(移动端可以使用默认值20px) */
        chart.axis('tem', {
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
        chart.point().position('time*tem');
        chart.render()`,
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