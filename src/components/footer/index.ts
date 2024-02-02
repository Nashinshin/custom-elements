export function init() {
  class FooterEl extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });
      var style = document.createElement("style");
      style!.textContent = `
      .root{
             background-color: #FFA0EA;
             height: 233px;
             display: flex;
             justify-content: center;
             align-items: center;
             font-family: "Roboto", sans-serif;
             font-size: 22px;
          }
          `;

      shadow.appendChild(style!);

      var div = document.createElement("div");
      div.classList.add("root");
      div.textContent = "Footer";
      shadow.appendChild(div);
    }
  }
  customElements.define("footer-el", FooterEl);
}

init();
