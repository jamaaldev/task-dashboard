import { html } from "../node_modules/lit-html/lit-html.js";
import { html_body } from "../component/innerHtml.js";

const body = () => {
  const body = document.createElement("body");
  html_body(body);

  return (body.outerHTML = tempalete.strings);
};


const tempalete = html`


<body>

<div class="container">
    <!-- sidebar -->
    <aside class="sidebar"></aside>
    <!-- main -->
    
    <main class="main-container"></main>
    
    <!-- right_side -->
    <aside class="right_side">
      <div class="mini_calendar"></div>
    </aside>
  </div>

</body>


  
  `;

body()

// export default body;
