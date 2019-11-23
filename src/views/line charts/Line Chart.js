import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class LineChart extends Component {
	render() {
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", // "light1", "dark1", "dark2"
			title:{
				text: "Impressions sent"
			},
			axisY: {
				title: "Impressions",
				includeZero: false,
				suffix: ""
			},
			axisX: {
				title: "Day",
				prefix: "",
				interval: 1
			},
			data: [{
				type: "line",
				toolTipContent: "Day {x}: {y}",
				dataPoints: [
					{ x: 1, y: 6400 },
					{ x: 2, y: 6100 },
					{ x: 3, y: 6400 },
					{ x: 4, y: 6200 },
					{ x: 5, y: 6400 },
					{ x: 6, y: 6000 },
					{ x: 7, y: 5800 },
					{ x: 8, y: 5900 },
					{ x: 9, y: 5300 },
					{ x: 10, y: 5400 },
					{ x: 11, y: 6100 },
					{ x: 12, y: 6000 },
					{ x: 13, y: 5500 },
					{ x: 14, y: 6000 },
					{ x: 15, y: 5600 },
					{ x: 16, y: 6000 },
					{ x: 17, y: 5950 },
					{ x: 18, y: 6300 },
					{ x: 19, y: 5800 },
					{ x: 20, y: 5400 },
					{ x: 21, y: 5900 },
					{ x: 22, y: 6400 },
					{ x: 23, y: 5900 }
				]
			}]
		}
		
		return (
		<div>
			<h1>Impression analytics monthly graph</h1>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default LineChart;                           
