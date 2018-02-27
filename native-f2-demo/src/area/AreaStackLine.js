import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import F2charts from 'native-f2charts';

export default class AreaStackLine extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Area (Column) - StackLine`,
  });
  constructor(props) {
    super(props);
    const data = [
      { month: 12, tem: 7, city: 'tokyo' },
      { month: 1, tem: 6.9, city: 'tokyo' },
      { month: 2, tem: 9.5, city: 'tokyo' },
      { month: 3, tem: 14.5, city: 'tokyo' },
      { month: 4, tem: 18.2, city: 'tokyo' },
      { month: 5, tem: 21.5, city: 'tokyo' },
      { month: 6, tem: 25.2, city: 'tokyo' },
      { month: 7, tem: 26.5, city: 'tokyo' },
      { month: 8, tem: 23.3, city: 'tokyo' },
      { month: 9, tem: 18.3, city: 'tokyo' },
      { month: 10, tem: 13.9, city: 'tokyo' },
      { month: 11, tem: 9.6, city: 'tokyo' },
      { month: 12, tem: 0, city: 'newYork' },
      { month: 1, tem: 0.8, city: 'newYork' },
      { month: 2, tem: 5.7, city: 'newYork' },
      { month: 3, tem: 11.3, city: 'newYork' },
      { month: 4, tem: 17, city: 'newYork' },
      { month: 5, tem: 22, city: 'newYork' },
      { month: 6, tem: 24.8, city: 'newYork' },
      { month: 7, tem: 24.1, city: 'newYork' },
      { month: 8, tem: 20.1, city: 'newYork' },
      { month: 9, tem: 14.1, city: 'newYork' },
      { month: 10, tem: 8.6, city: 'newYork' },
      { month: 11, tem: 2.5, city: 'newYork' },
      { month: 12, tem: 2, city: 'berlin' },
      { month: 1, tem: 0.6, city: 'berlin' },
      { month: 2, tem: 3.5, city: 'berlin' },
      { month: 3, tem: 8.4, city: 'berlin' },
      { month: 4, tem: 13.5, city: 'berlin' },
      { month: 5, tem: 17, city: 'berlin' },
      { month: 6, tem: 18.6, city: 'berlin' },
      { month: 7, tem: 17.9, city: 'berlin' },
      { month: 8, tem: 14.3, city: 'berlin' },
      { month: 9, tem: 9, city: 'berlin' },
      { month: 10, tem: 3.9, city: 'berlin' },
      { month: 11, tem: 1, city: 'berlin' }
    ];
    this.state = {
      data,
      option : `
        var data = ${JSON.stringify(data)};
        chart.source(data, {
          month: {
            tickCount: 12
          },
          tem: {
            tickCount: 5
          }
        });
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
        chart.area().position('month*tem').color('city')
          .shape('smooth')
          .style({
            opacity: 0.6
          })
          .adjust('stack');
        chart.line().position('month*tem').color('city')
          .shape('smooth')
          .adjust('stack');
        chart.render();
        
        var canvas = document.getElementById('main');
        function getPoint(canvas, x, y) {
          var bbox = canvas.getBoundingClientRect();
          return {
            x: x - bbox.left,
            y: y - bbox.top
          };
        }
        
        canvas.onclick = function(e) {
          var point = getPoint(e.target, e.clientX, e.clientY);
          var data = chart.getSnapRecords(point);
          var html = '';
          data.forEach(function(item) {
              html += 'city:' + item._origin.city + ',tem:' + item._origin.tem + ',month:' + item._origin.month;
          });
          window.alert(html);
        };`,
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