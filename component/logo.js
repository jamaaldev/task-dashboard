import { html } from "../node_modules/lit-html/lit-html.js";
import { sidebar } from "../component/innerHtml.js";

const logo = () => {
    const logo = document.createElement("div");
    sidebar(logo);

    return (logo.outerHTML = tempalete.strings);
};
    const tempalete = html`
    <div class="logo">
    <img src="../images/logo.png" alt="logo">
    </div>
    `



export default logo;
