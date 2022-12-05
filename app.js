import { myKeys } from "./key.js"

const textarea = document.getElementById("area")


textarea.addEventListener("keypress",(event)=>{
    // check <enter> key
    if (event.key=="Enter"){
        copy()
        textarea.value=""
        return
    }
    
    // check if key undefined
    if (myKeys[event.key] == undefined){
        if (event.key.length == 1){
            textarea.value += event.key
        }
        return
    }

    // append text with compaired key
    textarea.value += myKeys[event.key]
})

textarea.addEventListener("keydown",(event)=>{
    // if <Backspace> pressed => del last char
    if (event.key == "Backspace"){
        // remove last char
        textarea.value = textarea.value.slice(0,textarea.value.length-1)
        return
    }
})

function copy(){
    textarea.select()
    navigator.clipboard.writeText(textarea.value)
}

// edit theme color
let isDarkMode = false
let bgcolor,
    darkercolor,
    lightercolor,
    fontcolor

// load data from localStorage
window.addEventListener("load",()=>{
    // skip load if in first time
    if(!localStorage.getItem("theme")){
        return
    }else{
        // update isDarkMode Var
        if (localStorage.getItem("theme") == "dark"){
            isDarkMode = true
        }else{
            isDarkMode = false
        }

        // update theme
        setTheme()
    }
})


function switchMode(){
    isDarkMode = !isDarkMode
    setTheme()
}

function setTheme(){
    // set theme
    if(isDarkMode){
        bgcolor="rgb(244, 244, 244)"
        darkercolor="rgb(203, 203, 203)"
        lightercolor="rgb(248, 248, 248)"
        fontcolor="rgb(0,0,0)"
    }
    if(!isDarkMode){
        bgcolor="#212121"
        darkercolor="#2E2E2E"
        lightercolor="#717171"
        fontcolor="rgb(255,255,255)"
    }

    document.documentElement.style.setProperty('--bgcolor',bgcolor)
    document.documentElement.style.setProperty('--darkercolor',darkercolor)
    document.documentElement.style.setProperty('--lightercolor',lightercolor)
    document.documentElement.style.setProperty('--fontcolor',fontcolor)
    
    // save theme to localStorage
    localStorage.setItem("theme",(isDarkMode ? "dark" : "light"))
}


const btn = document.getElementById('switch')

btn.addEventListener("click",switchMode)