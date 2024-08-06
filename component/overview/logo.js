import { sidebar } from "./innerHtml.js";

const html = (html) =>{
    return html
    }
const logo = () => {
    const logo = document.createElement("div");
    sidebar(logo);

    return (logo.outerHTML = tempalete);
};
    const tempalete = html`
    <div class="logo">
    <img src="./images/logo.png" alt="logo">
    </div>
    `



export default logo;
