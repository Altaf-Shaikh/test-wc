const template = document.createElement("template");
template.innerHTML = /*html*/`
  <style>
    button {
      border: none;
      border-radius: 10px;
      background-color: seagreen;
      color: white;
    }
  </style>
  <span>Document Verification wc</span><br>
  <button id="btn">Click Here for document verification</button>`;

class MyCounter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.getElementById("btn").onclick = () => this.triggerEvent();
  }

  triggerEvent() {
    const event = new CustomEvent('wcVerifyDocument', { 
       detail: {
        eventType: 'wcVerifyDocument',
        eventId: 'wcVerifyDocument',
        data: {
            documentCountry: 'NI',
            documentNumber: '123456',
            documentType: 'NIT'
       }
      }
     })
    this.dispatchEvent(event);
  }
}

customElements.define("wc-verify-document", MyCounter);
