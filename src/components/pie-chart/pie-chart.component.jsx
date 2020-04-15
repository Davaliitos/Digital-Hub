import React from "react";
import * as d3 from "d3";

import './pie-chart.style.scss'


class PieChart extends React.Component {
  componentDidMount() {
    var data = { a: 9, b: 20, c: 30, d: 8, e: 12 };

    var svg = d3
      .select("#pie")
      .attr("width", 300)
      .attr("height", 300)
      .append("g")
      .attr("transform", "translate(150,150)");

    var color = d3
      .scaleOrdinal()
      .domain(data)
      .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"]);

    var pie = d3.pie().value(function (d) {
      return d.value;
    });

    var data_ready = pie(d3.entries(data));

    var arcGenerator = d3.arc()
        .innerRadius(0)
        .outerRadius(150)

    svg
      .selectAll("whatever")
      .data(data_ready)
      .enter()
      .append("path")
      .attr("d", arcGenerator)
      .attr("fill", function (d) {
        return color(d.data.key);
      })
      .attr('stroke','black')
      .style('stroke-width','2px')
      .style('opacity',0.7)

    svg
      .selectAll("whatever")
      .data(data_ready)
      .enter()
      .append('text')
      .text(function(d) { return 'grp ' + d.data.key})
      .attr('transform',function(d) {return 'translate(' + arcGenerator.centroid(d) + ')'})
      .style('text-anchor','middle')
      .style('font-size', 17)

  }

  render() {
    return (
      <div>
        <svg id="pie" className="chart" />
      </div>
    );
  }
}

export default PieChart;
