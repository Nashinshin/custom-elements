function t(){class t extends HTMLElement{constructor(){super(),this.render()}render(){var t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`

        .root{
            background-color: #FF8282;
            height: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: "Roboto", sans-serif; 
            font-size: 22px;
        }

        @media(min-width: 600px){
            height: 80px;
        }
        `,t.appendChild(e);var o=document.createElement("div");o.classList.add("root"),o.textContent="Header",t.appendChild(o)}}customElements.define("header-el",t)}function e(){class t extends HTMLElement{constructor(){super(),this.render()}render(){var t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
      .root{
             background-color: #FFA0EA;
             height: 233px;
             display: flex;
             justify-content: center;
             align-items: center;
             font-family: "Roboto", sans-serif;
             font-size: 22px;
          }
          `,t.appendChild(e);var o=document.createElement("div");o.classList.add("root"),o.textContent="Footer",t.appendChild(o)}}customElements.define("footer-el",t)}function o(){class t extends HTMLElement{constructor(){super(),this.render()}render(){var t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
  
          .root{
              font-family: "Poppins", sans-serif;
              font-size: 52px;
              font-weight: bold;
              margin: 30px auto;
              width: 315px;
          }

          @media (min-width: 600px){
            .root{
                width: 593px;
            }
        }
          `,t.appendChild(e);var o=document.createElement("div");o.classList.add("root"),o.textContent="Título de esta página",t.appendChild(o)}}customElements.define("title-el",t)}function n(){class t extends HTMLElement{constructor(){super(),this.render()}render(){let t=this.getAttribute("type");var e=this.attachShadow({mode:"open"}),o=document.createElement("style");o.textContent=`
          @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
    
            .root{
                font-family: "Poppins", sans-serif;
                font-size: 38px;
                font-weight: bold;
                width: 315px;
                margin: 0 auto;
            }

            @media (min-width: 600px){
                .root{
                    width: 593px;
                }
            }
            `,e.appendChild(o);var n=document.createElement("div");n.classList.add("root"),"subtitulo-1"==t?n.textContent="Subtítulo":"subtitulo-2"==t&&(n.textContent="Subtítulo 2"),e.appendChild(n)}}customElements.define("subtitle-el",t)}function i(){class t extends HTMLElement{constructor(){super(),this.render()}render(){var t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
          @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
    
            .root{
                font-family: "Poppins", sans-serif;
                font-size: 22px;
                font-weight: medium;
                margin: 60px auto;
                width: 315px;
            }

            @media (min-width: 600px){
              .root{
                width: 505px;
              }
          }
            `,t.appendChild(e);var o=document.createElement("div");o.classList.add("root"),o.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit.",t.appendChild(o)}}customElements.define("large-el",t)}function a(){class t extends HTMLElement{constructor(){super(),this.render()}render(){let t=this.getAttribute("type");var e=this.attachShadow({mode:"open"}),o=document.createElement("style");o.textContent=`
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
            `,e.appendChild(o);var n=document.createElement("div");n.classList.add("root"),"elemento-1"==t?n.textContent="Esta página sin dudas es la mejor":"elemento-2"==t?n.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur iure voluptas quia accusantium voluptatum aspernatur provident et repudiandae quam veritatis, libero porro sit beatae laboriosam a aut consequatur quidem?":"elemento-3"==t?n.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur iure voluptas quia accusantium voluptatum aspernatur provident et repudiandae quam veritatis, libero porro sit beatae laboriosam a aut consequatur quidem?":"elemento-4"==t?n.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur iure voluptas quia accusantium voluptatum aspernatur provident et repudiandae quam veritatis, libero porro sit beatae laboriosam a aut consequatur quidem?":"elemento-5"==t&&(n.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur iure voluptas quia accusantium voluptatum aspernatur provident et repudiandae quam veritatis, libero porro sit beatae laboriosam a aut consequatur quidem?"),e.appendChild(n)}}customElements.define("body-el",t)}function s(){class t extends HTMLElement{constructor(){super(),this.render()}render(){var t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
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
            `,t.appendChild(e);var o=document.createElement("div");o.classList.add("root"),o.textContent="Nombre",t.appendChild(o);var n=document.createElement("input");n.classList.add("root"),n.type="text",n.placeholder="Ingresa tu nombre",t.appendChild(n)}}customElements.define("label-el",t)}function r(){class t extends HTMLElement{constructor(){super(),this.render()}render(){var t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
          @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
    
            .root{
                font-family: "Poppins", sans-serif;
                font-size: 18px;
                height: 55px;
                width: 280px;
                border: 2px black solid;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 4px;
                margin: 0 auto 40px auto;
            }

            @media (min-width: 600px){
                .root{
                    width: 353px;
                }
            }
            `,t.appendChild(e);var o=document.createElement("div");o.classList.add("root"),o.textContent="Volver",t.appendChild(o)}}customElements.define("outline-el",t)}function d(){class t extends HTMLElement{constructor(){super(),this.render()}render(){var t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
          @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
    
            .root{
                font-family: "Poppins", sans-serif;
                font-size: 18px;
                background-color: #9CBBE9;
                width: 280px;
                height: 55px;
                border-radius: 4px;
                margin: 10px auto 80px auto;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            @media (min-width: 600px){
                .root{
                    width: 353px;
                }
            `,t.appendChild(e);var o=document.createElement("button");o.classList.add("root"),o.textContent="Button",t.appendChild(o)}}customElements.define("button-el",t)}t(),e(),o(),n(),i(),a(),s(),r(),d(),t(),e(),o(),n(),i(),a(),s(),r(),d();
//# sourceMappingURL=index.ca388066.js.map
