// import { html } from "../node_modules/lit-html/lit-html.js";
// import {html} from "lit-html"
import { sidebar } from "./innerHtml.js";

const html = (html) =>{
  return html
  }
const nav = () => {
  const nav = document.createElement("nav");
  sidebar(nav);
  return (nav.outerHTML = tempalete);
};

const tempalete = html`
  <nav class="nav">
    <ul>
      <li class="nav-item active">
        <a href="/index">
          <img src="./images/category-2.svg" alt="" />
          Overview
        </a>
      </li>

      <li class="nav-item">
        <a href="#">
          <img src="./images/book.svg" alt="" />
          Tasks
        </a>
      </li>
      <li class="nav-item">
        <a href="#">
          <img src="./images/user-octagon.svg" alt="" />
          Mentors
        </a>
      </li>
      <li class="nav-item">
        <a href="#">
          <img src="./images/message.svg" alt="" />
          Message
        </a>
      </li>
      <li class="nav-item">
        <a href="#">
          <img src="./images/setting-2.svg" alt="" />
          Settings
        </a>
      </li>
    </ul>
  </nav>
`;
export default nav;
