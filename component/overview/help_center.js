import { innerHelper } from "../../lib/innerHtml.js";

const html = (html) =>{
  return html
  }
const help_center = () => {
  const help_center = document.createElement("div");
  const {sidebar} = innerHelper(help_center,".sidebar")
  sidebar(help_center);

  return (help_center.outerHTML = tempalete);
};

const tempalete = html`
  <div class="help-center">
    <div class="help_reflection_container">
      <div class="reflection_top_left"></div>
      <div class="reflection_bottom_right"></div>
    </div>
    <div class="help_info">
      <div class="question">
        <div class="circle">
          <img src="./images/ques.svg" alt="" />
        </div>
      </div>
      <div class="content">
        <h2>Help Center</h2>
        <p>Having Trouble in Learning. Please contact us for more questions.</p>
      </div>

      <div class="button">
        <button>Go To Help Center</button>
      </div>
    </div>
  </div>
`;


export default help_center;
