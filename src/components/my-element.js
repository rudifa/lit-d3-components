import { html, css, LitElement } from "lit";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyElement extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        border: solid 1px gray;
        padding: 16px;
        max-width: 800px;
        background-color: #fff8f5;
      }

      h1 {
        font-size: 1.8rem;
      }
    `;
  }

  static get properties() {
    return {
      name: { type: String },
      count: { type: Number },
    };
  }

  constructor() {
    super();
    this.name = "World";
    this.count = 0;
  }

  render() {
    return html`
      <h1>Hello, ${this.name}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `;
  }

  _onClick() {
    this.count++;
  }
}

window.customElements.define("my-element", MyElement);
