import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import F2charts from 'native-f2charts';

export default class DashBoard extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `DashBoard`,
  });
  constructor(props) {
    super(props);
    const data = [{pointer: '当前收益',value: 5, length:2,y:1.05}];
    this.state = {
      data,
      option : `
        var data = ${JSON.stringify(data)};
        var Shape = F2.Shape;
        var G = F2.Graphic;
        /* 自定义绘制数据的的形状 */
        Shape.registerShape('point', 'dashBoard', {
          getPoints:function(cfg){
            var x = cfg.x;
            var y = cfg.y;
      
            return [
              {x: x, y: y},
              {x: x, y: 0.5}
            ];
          },
          draw: function(cfg, canvas){
            var point1 = cfg.points[0];
            var point2 = cfg.points[1];
            point1 = this.parsePoint(point1);
            point2 = this.parsePoint(point2);
      
            G.drawLines([point1, point2], canvas, {
              stroke: '#18b7d6',
              lineWidth: 2
            });
      
            var text = cfg.origin._origin.value.toString();
            G.drawText(text+'%', cfg.center, canvas, {
              fillStyle: '#f75b5b',
              font:'30px Arial',
              textAlign: 'center',
              textBaseline: 'bottom'
            });
      
            G.drawText(cfg.origin._origin.pointer, cfg.center, canvas, {
              fillStyle: '#ccc',
              textAlign: 'center',
              textBaseline: 'top'
            });
          }
        });
        chart.source(data, {
          'value': {
            type: 'linear',
            min: 0,
            max: 15,
            ticks: [0, 5, 7.5, 10, 15],
            nice: false
          },
          'length': {type: 'linear',min: 0,max: 10},
          y: {type: 'linear',min: 0, max: 1}
        });
      
        chart.coord('polar',{
          inner: 0,
          startAngle: -1.25 * Math.PI,
          endAngle: 0.25 * Math.PI
        });
      
        /* 配置value轴刻度线 */
        chart.axis('value', {
          tickLine: {
            strokeStyle: '#b9e6ef',
            lineWidth: 2,
            value: -5
          },
          label: null,
          grid: null,
          line: null
        });
      
        chart.axis('y', false);
      
        /* 绘制仪表盘辅助元素 */
        chart.guide().arc([0,1.05],[4.8,1.05],{
          strokeStyle: '#18b7d6',
          lineWidth:5,
          lineCap: 'round'
        });
        chart.guide().arc([5.2,1.05],[9.8,1.05],{
          strokeStyle: '#ccc',
          lineWidth:5,
          lineCap: 'round'
        });
        chart.guide().arc([10.2,1.05],[15,1.05],{
          strokeStyle: '#ccc',
          lineWidth:5,
          lineCap: 'round'
        });
        chart.guide().arc([0,1.2],[15,1.2],{
          strokeStyle: '#ccc',
          lineWidth:1
        });
      
        chart.guide().text([-0.5,1.3], '0.00%', {
          fillStyle: '#ccc',
          font:'18px Arial',
          textAlign: 'center'
        });
        chart.guide().text([7.5,0.7], '7.50%', {
          fillStyle: '#ccc',
          font:'18px Arial',
          textAlign: 'center'
        });
        chart.guide().text([15.5,1.3], '15.00%', {
          fillStyle: '#ccc',
          font:'18px Arial',
          textAlign: 'center'
        });
      
        chart.point().position('value*y').size('length').color('#18b7d6').shape('dashBoard');
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