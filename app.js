const keys = {
    a:"ง",
    s:"เ",
    d:"ร",
    f:"น"
}
const textarea = document.getElementById("area")
textarea.value = "hello"
textarea.addEventListener("keypress",(event)=>{
    // check <enter> key
    if (event.key=="Enter"){
        copy()
        textarea.value=""
        return
    }
    
    // if +,= pressed => del last char
    if (event.key == "+" || event.key == "="){
        // use for remove last char
        textarea.value = textarea.value.slice(0,textarea.value.length-1)
        return
    }

    // append text with compaired key
    textarea.value += keys[event.key]
    console.log(event.key)
})

function copy(){
    textarea.select()
    navigator.clipboard.writeText(textarea.value)
}
