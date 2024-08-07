import progressBar from "../ui/progress_bar.js";
import { innerHelper } from "../../lib/innerHtml.js";
import progressScript from "../ui/progress_script.js";

const html = (html) =>{
  return html
  }
const running_task = () => {
  const section = document.createElement("section");
  const {main} = innerHelper(section,".main-container")
  main(section);

  
  return (section.outerHTML = tempalete);
};

const tempalete = html`
  <section class="top_section">
    <div class="running_task">
      <p>Running Task</p>
      <span>65</span>
      <div class="percen_task">
        <div class="progress_bar">
          <!-- ${setTimeout(() => progressBar() && progressScript())} -->
        </div>
        <div class="number_task">
          <span>100</span>
          <span>Task</span>
        </div>
      </div>
    </div>
    <div class="activity">
      <div class="task"></div>
    </div>
  </section>
`;



export default running_task;
