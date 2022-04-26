import { LitElement, html, css } from "lit";
import { property, customElement } from "lit/decorators.js";

import { InfoLinks } from "./info-links";
import { D3Scatterplot } from "./d3-scatterplot";
import { MyElement } from "./my-element";

/**
 * Data set for the <d3-scatterplot> component.
 */

function getRandom(max) {
  return Math.random() * max;
}

const scpData = {
  title: "Demo Plot",
  xLabel: "x",
  yLabel: "y",
  points: [
    [getRandom(100), getRandom(100)],
    [getRandom(100), getRandom(100)],
    [getRandom(100), getRandom(100)],

    [getRandom(100), getRandom(200)],
    [getRandom(100), getRandom(200)],
    [getRandom(100), getRandom(200)],
    [getRandom(100), getRandom(200)],
    [getRandom(100), getRandom(200)],
    [getRandom(100), getRandom(200)],
    [getRandom(100), getRandom(200)],
    [getRandom(100), getRandom(200)],
    [getRandom(100), getRandom(200)],
    [getRandom(100), getRandom(200)],
  ],
};

/**
 * Demo app for lit-elements
 */
@customElement("app-root")
export class AppRoot extends LitElement {
  static get styles() {
    return css``;
  }

  render() {
    return html`
      <info-links></info-links>
      <my-element name="Cruel World"></my-element>
      <div>
        <d3-scatterplot
          .points=${scpData.points}
          .title=${scpData.title}
          .xLabel=${scpData.xLabel}
          .yLabel=${scpData.yLabel}
        ></d3-scatterplot>
        <!-- <d3-scatterplot></d3-scatterplot> -->
      </div>
    `;
  }
}
