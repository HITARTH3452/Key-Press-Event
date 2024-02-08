window.addEventListener("keydown", (e) => {
    document.getElementById("keyName").innerHTML = `Great You Pressed -> <span>${e.key}<span>`
    document.getElementById("keyCode").innerHTML = `With the code -> <span>${e.keycode}<span>`
})
    
