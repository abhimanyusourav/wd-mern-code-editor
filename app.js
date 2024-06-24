
const leftBar = document.querySelector(".left-bar")
const runBtn = document.querySelector(".run")
const rightBar = document.querySelector(".right-bar")

runBtn.addEventListener("click", function () {
    const enteredCode = leftBar.value
    rightBar.contentWindow.document.body.innerHTML = enteredCode
    rightBar.contentWindow.document.write(enteredCode)    
})