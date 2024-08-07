import { innerHelper } from "../../lib/innerHtml.js";

const html = (html) =>{
  return html
  }
const nav = () => {
  const nav = document.createElement("nav");
  const {sidebar} = innerHelper(nav,".sidebar")
  sidebar(nav);
  return (nav.outerHTML = tempalete);
};

const tempalete = html`
  <nav class="nav">
    <ul>
      <li class="nav-item active">
        <a href="./">
          <img src="./images/category-2.svg" alt="" />
          Overview
        </a>
      </li>

      <li class="nav-item">
        <a href="./task">
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
