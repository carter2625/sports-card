import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js";

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class SportsCard extends LitElement {
  static get properties() {
    return {
      name: {
        type: String,
        reflect: true
      },
      fname: { type: String},
      position: {
        type: String,
      },
      top: { type: String},
      statsLabel: { type: String},
    }
  }

  constructor() {
    super();
    this.name = "Don Mattingly";
    this.position = "Yankee GOAT";
    this.statsLabel = "Career Stats";
    this.top = "Player";
  }

  render() {
    return html`
    <div class="wrapper">
      <div class="container">
        <meme-maker
          image-url="${drew}"
          top-text="${this.top}">
        </meme-maker>
        <div class="header">
          <h3>${this.name}</h3>
          <h4>${this.position}</h4>
        </div>
        <details class="details">
          <summary>${this.statsLabel}</summary>
          <div>
            <slot></slot>
          </div>
        </details>
      </div>
    </div>`;
  }
}

customElements.define('sports-card', SportsCard);