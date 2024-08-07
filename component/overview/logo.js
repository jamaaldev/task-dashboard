import { innerHelper } from "../../lib/innerHtml.js";

const html = (html) =>{
    return html
    }
const logo = () => {
    const logo = document.createElement("div");
    const {sidebar} = innerHelper(logo,".sidebar")
    sidebar(logo);

    return (logo.outerHTML = tempalete);
};
    const tempalete = html`
    <div class="logo">
    <img src="./images/logo.png" alt="logo">
    </div>
    `



export default logo;
