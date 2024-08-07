import {innerHelper} from "../../lib/innerHtml.js";

const html = (html) =>{
return html
}
const body = () => {
  const body = document.createElement("body");
  const {html_body} = innerHelper(body,"body")
  html_body();

  return (body.outerHTML = tempalete);
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

