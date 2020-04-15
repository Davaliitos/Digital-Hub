import React from "react";
import * as d3 from "d3";

import "./pie-chart.style.scss";

class PieChart extends React.Component {
  renderChart = () => {
    var data = this.props.data;
    var height = this.props.height ? this.props.height : 300;

    var svg = d3
      .select("#pie")
      .attr("width", height)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + height / 2 + "," + height / 2 + ")");

    var color = d3
      .scaleOrdinal()
      .domain(data)
      .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"]);

    var pie = d3.pie().value(function (d) {
      return d.value;
    });

    var data_ready = pie(d3.entries(data));

    var arcGenerator = d3
      .arc()
      .innerRadius(0)
      .outerRadius(height / 3);

    svg
      .selectAll("whatever")
      .data(data_ready)
      .enter()
      .append("path")
      .attr("d", arcGenerator)
      .attr("fill", function (d) {
        return color(d.data.key);
      })
      .attr("stroke", "black")
      .style("stroke-width", "2px")
      .style("opacity", 0.7);

    svg
      .selectAll("whatever")
      .data(data_ready)
      .enter()
      .append("text")
      .text(function (d) {
        return "$" + d.data.value;
      })
      .attr("transform", function (d) {
        return "translate(" + arcGenerator.centroid(d) + ")";
      })
      .style("text-anchor", "middle")
      .style("font-size", 17);

    const svgLegend = svg
      .append("g")
      .attr("class", "gLegend")
      .attr("transform", "translate(-100,0)");

    const legend = svgLegend
      .selectAll(".legend")
      .data(data_ready)
      .enter()
      .append("g")
      .attr("class", "legend");

    legend
      .append("rect")
      .attr("class", "legend-node")
      .attr("x", -20)
      .attr("y", -12)
      .attr("width", "22px")
      .attr("height", "22px")
      .style("fill", (d) => color(d.data.key));

    legend
      .append("text")
      .attr("class", "correct-legend")
      .attr("style", "font-size:14px;font-weight:600;")
      .attr("x", 15)
      .attr("y", 5)
      .text(function (d) {
        return "" + d.data.key;
      });

    var offset = 0;

    legend.each(function () {
      var pos = d3.select(this).node().getBoundingClientRect().width + 20;
      d3.select(this).attr(
        "transform",
        "translate(" + offset + "," + -height * 0.4 + ")"
      );
      offset = offset + pos;
    });
  };

  componentDidMount() {
    this.renderChart()
  }

  componentDidUpdate(){
    this.renderChart();
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
