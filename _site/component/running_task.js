// import { html } from "../node_modules/lit-html/lit-html.js";
// import {html} from "lit-html"
import { main } from "./innerHtml.js";

const html = (html) =>{
  return html
  }
const running_task = () => {
  const section = document.createElement("section");
  main(section);

  return (section.outerHTML = tempalete);
};

const tempalete = html`
  <section class="top_section">
    <div class="running_task"></div>
    <div class="activity">
      <div class="task"></div>
    </div>
  </section>
`;

export default running_task;
