import { html, css, LitElement } from "lit";
import { property, customElement, state } from "lit/decorators.js";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("my-element")
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

      button {
        font-size: 1.1rem;
      }
    `;
  }

  @property({ type: String }) name = "World";
  @state({ type: Number }) count = 0;

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
