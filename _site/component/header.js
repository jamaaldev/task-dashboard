// import { html } from "../node_modules/lit-html/lit-html.js";
// import {html} from "lit-html"
import { main } from "./innerHtml.js";

const html = (html) =>{
  return html
  }
const header = () => {
  const headerTop = document.createElement("header");
  main(headerTop);

  return (headerTop.outerHTML = tempalete);
};

const tempalete = html`
  <header class="main_header">
    <div class="header_content">
      <h2>Hi, Skylar Dias</h2>
      <p>Let's finish your task today!</p>
    </div>
    <div class="main_avator">
      <div class="notification_container">
        <div class="notification_info">
          <div class="notification_red_circle"></div>

          <img
            class="notification"
            src="/images/Notification.svg"
            alt="Notification"
          />
        </div>
      </div>
      <img
        class="avator"
        width="62"
        height="62"
        src="/task-dashboard/images/avator.jpg"
        alt="avator"
      />
    </div>
  </header>
`;
export default header;
