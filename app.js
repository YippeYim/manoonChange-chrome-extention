import { myKeys } from "./key.js"

const textarea = document.getElementById("area")

textarea.addEventListener("keypress",(event)=>{
    // check <enter> key
    if (event.key=="Enter"){
        copy()
        textarea.value=""
        return
    }
    
    // if +,= pressed => del last char
    if (event.key == "+" || event.key == "="){
        // remove last char
        textarea.value = textarea.value.slice(0,textarea.value.length-1)
        return
    }

    // append text with compaired key
    textarea.value += myKeys[event.key]
})

function copy(){
    textarea.select()
    navigator.clipboard.writeText(textarea.value)
}