export function init() {
  class BodyEl extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      const type = this.getAttribute("type");
      var shadow = this.attachShadow({ mode: "open" });
      var style = document.createElement("style");
      style!.textContent = `
          @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
    
            .root{
                font-family: "Poppins", sans-serif;
                font-size: 18px;
                margin: 30px auto;
                width: 315px;
            }

            @media (min-width: 600px){
                .root{
                    width: 593px;
                }
            }
            `;

      shadow.appendChild(style!);

      var div = document.createElement("div");
      div.classList.add("root");
      if (type == "elemento-1") {
        div.textContent = "Esta página sin dudas es la mejor";
      } else if (type == "elemento-2") {
        div.textContent =
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur iure voluptas quia accusantium voluptatum aspernatur provident et repudiandae quam veritatis, libero porro sit beatae laboriosam a aut consequatur quidem?";
      } else if (type == "elemento-3") {
        div.textContent =
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur iure voluptas quia accusantium voluptatum aspernatur provident et repudiandae quam veritatis, libero porro sit beatae laboriosam a aut consequatur quidem?";
      } else if (type == "elemento-4") {
        div.textContent =
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur iure voluptas quia accusantium voluptatum aspernatur provident et repudiandae quam veritatis, libero porro sit beatae laboriosam a aut consequatur quidem?";
      } else if (type == "elemento-5") {
        div.textContent =
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur iure voluptas quia accusantium voluptatum aspernatur provident et repudiandae quam veritatis, libero porro sit beatae laboriosam a aut consequatur quidem?";
      }
      shadow.appendChild(div);
    }
  }
  customElements.define("body-el", BodyEl);
}

init();
