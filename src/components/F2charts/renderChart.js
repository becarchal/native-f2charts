// import '@antv/f2/dist/f2.min';
// import toString from '../../util/toString';

export default function renderChart(props) {
  const height = `${props.height || 400}`;
  const width = props.width ? `${props.width}` : 'auto';
  const padding = props.padding ? `${props.padding}` : `[ 30, 30, 30, 30 ]`;
  const renderChart = `
    var chart = new F2.Chart({
      id: 'main',
      width: ${width},
      height: ${height},
      padding: ${padding},
      pixelRatio: window.devicePixelRatio
    });`
    + props.option;
    // + `myChart.on('click', function(params) {
    //   var seen = [];
    //   var paramsString = JSON.stringify(params, function(key, val) {
    //     if (val != null && typeof val == "object") {
    //       if (seen.indexOf(val) >= 0) {
    //         return;
    //       }
    //       seen.push(val);
    //     }
    //     return val;
    //   });
    //   window.postMessage(paramsString);
    // });`
  return renderChart;
}
