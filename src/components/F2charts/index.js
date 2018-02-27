import React, { Component } from 'react';
import { WebView, View, Text } from 'react-native';
import renderChart from './renderChart';
import '@antv/f2/dist/f2.min';

export default class App extends Component {
  componentWillReceiveProps(nextProps) {
    if(nextProps.option !== this.props.option) {
      this.refs.chart.reload();
    }
  }

  render() {
    const { height, width, backgroundColor, datasource, onPress, placeholder } = this.props;
    return (
      <View style={{flex: 1, height: height || 400,}}>
        {(datasource && datasource.length > 0)
          ? <WebView
              ref="chart"
              scrollEnabled = {false}
              injectedJavaScript = {renderChart(this.props)}
              style={{
                height: height || 400,
                backgroundColor: backgroundColor || 'transparent'
              }}
              scalesPageToFit={false}          
              source={require('./tpl.html')}
              onMessage={event => onPress ? onPress(JSON.parse(event.nativeEvent.data)) : null}
            />
          : (placeholder ||
            <View style={{
            height: height || 400,
            width, justifyContent: "center",
            alignItems: "center" }}><Text>暂无数据</Text></View>)
        }
      </View>
    );
  }
}
