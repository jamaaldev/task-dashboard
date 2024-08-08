
export  const innerHelper = (append,target) =>{


 const main = () =>{
    const main = document.querySelector(target);
    main.appendChild(append)

}
 const right_sidebar = () =>{
    const right_sidebar = document.querySelector(".right_side");
    right_sidebar.appendChild(append)

}
 const sidebar = () =>{
    
    const sidebar = document?.querySelector(target);
    if(append && sidebar){

        sidebar.appendChild(append)
    }

}

 const html_body = () =>{
    const body = document.querySelector(target);
    body.appendChild(append)

}

const innerTarget = () =>{
const inner = document.querySelector(target)
if(inner){
    inner.appendChild(append)

}



}


return {main,right_sidebar,sidebar,html_body,innerTarget}
};
export const innerInsert = (arr) => {
    const array = [...arr]
    setTimeout(() => {
      
    array.forEach(call => call())
    })
  }



