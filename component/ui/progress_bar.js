import { innerHelper } from "../../lib/innerHtml.js";

const html = (html) => {
  return html;
};
export const progressBar = () => {
  const progress = document.createElement("div");
  const { innerTarget } = innerHelper(progress, ".progress_bar");
  innerTarget();
  

  

  return (progress.outerHTML = tempalete);
};
const tempalete = html`
  <div
    class="circular-progress"
    data-inner-circle-color="black"
    data-percentage="45"
    data-progress-color="blue"
    data-bg-color="black"
  >
  <div class="inner-circle "></div>
  <div class="inner-circle2"></div>
    <p class="percentage">0%</p>
    
  </div>
`;



