import { LitElement, html, css } from "lit";

export class InfoLinks extends LitElement {
  static get styles() {
    return css`
      h1 {
        font-size: 3rem;
      }
      .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        gap: 20px;
        padding: 20px;
        background-color: #2196f3;
        background: linear-gradient(315deg, #b4d2ea 0%, #2196f3 100%);
        font-size: 1.8rem;
        font-family: Helvetica;
      }
      .link {
        color: white;
      }
    `;
  }

  static properties = {
    _space: { state: true },
  };

  constructor() {
    super();
    this.space = "    ";
  }

  aHref(url, text) {
    return html` <a href=${url} class="link">${text}</a> `;
  }

  render() {
    return html`
      <div class="wrapper">
        ${this.aHref("https://lit.dev/", "Lit")}
        ${this.aHref("https://vitejs.dev/guide/", "Vite")}
        ${this.aHref("https://www.snowpack.dev/", "Snowpack")}
      </div>
    `;
  }
}

window.customElements.define("info-links", InfoLinks);
