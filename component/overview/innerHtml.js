
export const main = (append) =>{
    const main = document.querySelector(".main-container");
    main.appendChild(append)

}
export const right_sidebar = (append) =>{
    const right_sidebar = document.querySelector(".right_side");
    right_sidebar.appendChild(append)

}
export const sidebar = (append) =>{
    
    const sidebar = document?.querySelector(".sidebar");
    if(append && sidebar){

        sidebar.appendChild(append)
    }

}

export const html_body = (append) =>{
    const body = document.querySelector("body");
    body.appendChild(append)

}

