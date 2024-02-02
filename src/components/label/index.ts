export function init() {
    class LabelEl extends HTMLElement {
      constructor() {
        super();
        this.render();
      }
      render() {
        var shadow = this.attachShadow({ mode: "open" });
        var style = document.createElement("style");
        style!.textContent = `
          @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
    
            .root{
                font-family: "Poppins", sans-serif;
                font-size: 18px;
                border-radius: 4px;
                width: 272px;
                height: 55px;
                margin: 0px auto;
                display: flex;
                
            }

            @media (min-width: 600px){
                .root{
                    width: 353px;
                }
            `;
  
        shadow.appendChild(style!);
  
        var div = document.createElement("div");
        div.classList.add("root");
        div.textContent = "Nombre";
        shadow.appendChild(div);
        var input = document.createElement("input");
        input.classList.add("root");
        input.type = "text";
        input.placeholder = "Ingresa tu nombre";
        shadow.appendChild(input);
      }
    }
    customElements.define("label-el", LabelEl);
  }
  
  init();