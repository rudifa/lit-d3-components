/** @prettier */

import { LitElement, html, css, svg } from "lit";
//import { property, customElement } from "lit/decorators.js";

import * as d3 from "d3";

const dataset1 = [
  [90, 20],
  [20, 100],
  [66, 44],
  [53, 80],
  [24, 182],
  [80, 72],
  [10, 76],
  [33, 150],
  [100, 15],
  [0, 200],
  [0, 0],
  [100, 0],
];

/**
 * Scatter plot using d3.
 * @param {*} dataset : array of array[x,y]
 * @returns a d3 svg node to be rendered
 */
function d3Scatter(dataset, title, xLabel, yLabel) {
  // create a detached svg node to hold the chart
  const svg = d3.create("svg:svg");

  // set up the d3 visualization parameters
  svg.attr("viewBox", "0 0 500 300");
  const margin = 50,
    width = 300,
    height = 200;

  console.log("d3Scatter width", width, "height", height);

  const g = svg.append("g").attr("transform", `translate(${margin},${margin})`);

  // title
  svg
    .append("text")
    .attr("x", `${width * 0.7}`)
    .attr("y", `${margin - 10}`)
    .attr("text-anchor", "middle")
    .style("font-family", "Helvetica")
    .style("font-size", 15)
    .text(`${title}`);

  // X label
  svg
    .append("text")
    .attr("x", `${margin + width * 0.5}`)
    .attr("y", `${height + margin * 1.6}`)
    .attr("text-anchor", "middle")
    .style("font-family", "Helvetica")
    .style("font-size", 12)
    .text(`${xLabel}`);

  // Y label
  svg
    .append("text")
    .attr("text-anchor", "middle")
    .attr(
      "transform",
      `translate(${margin * 0.35}, ${margin + height * 0.5}) rotate(-90)`
    )
    .style("font-family", "Helvetica")
    .style("font-size", 12)
    .text(`${yLabel}`);

  // define scales
  const xScale = d3.scaleLinear().domain([0, 100]).range([0, width]);
  const yScale = d3.scaleLinear().domain([0, 200]).range([height, 0]);

  // append scales
  g.append("g")
    .attr("transform", `translate(0, ${height} )`)
    .call(d3.axisBottom(xScale));
  g.append("g").call(d3.axisLeft(yScale));

  // points
  svg
    .append("g")
    .selectAll("dot")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("cx", function (d) {
      return xScale(d[0]);
    })
    .attr("cy", function (d) {
      return yScale(d[1]);
    })
    .attr("r", 2)
    .attr("transform", `translate(${margin},${margin})`)
    .style("fill", "#CC0000");

  return svg;
}

/**
 * Scatter plot using d3 in lit-element.
 */
export class D3Scatterplot extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        max-width: 832px;
        background-color: #f9f8f5;
        color: black;
      }

      svg {
        width: 100%;
        height: 100%;
        background-color: #fffff7;
        border: 2px solid black;
      }

      html {
        border: 2px solid red;
      }

      text {
        fill: blue;
      }

      .circle {
        fill: none;
        stroke: #31b1e3;
        stroke-width: 1.5px;
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      xLabel: { type: String },
      yLabel: { type: String },
      points: { type: Array },
    };
  }

  constructor() {
    super();
    this.title = "Scatter Plot";
    this.xLabel = "Independent";
    this.yLabel = "Dependent";
    this.points = [
      [90, 20],
      [20, 100],
      [66, 44],
    ];
  }

  updated(changedProperties) {
    if (changedProperties.has("points")) {
      console.log("updated: points changed: ", this.points);
    }
  }

  render() {
    return [d3Scatter(this.points, this.title, this.xLabel, this.yLabel)];
  }
}

window.customElements.define("d3-scatterplot", D3Scatterplot);
