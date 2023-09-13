let bar = document.querySelector(".links")
let icon = document.querySelector('.icon')
let ul = document.querySelector('ul')


bar.addEventListener(
    "mouseover", 
    _=>{
        ul.style = 'display:block;'
    }
)
bar.addEventListener(
    "mouseout", 
    _=>{
        ul.style = 'display:none;'
    }
)
