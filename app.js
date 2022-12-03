import { myKeys } from "./key.js"

const textarea = document.getElementById("area")

textarea.addEventListener("keypress",(event)=>{
    // check <enter> key
    if (event.key=="Enter"){
        copy()
        textarea.value=""
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