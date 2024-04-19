const li = document.querySelector('.li')
const btn = document.querySelector('.btn')
let input = document.querySelector('.input')

let para = document.getElementById('para')

const timeInput = document.getElementById('timeInput')
const all = document.querySelector('.all')

function saveToDo() {
    localStorage.setItem('name','kiira')
}

console.log(localStorage.getItem(saveToDo))




btn.addEventListener('click', () => {
    let li = document.createElement('li')
    let inptValue = input.value
    // let img = document.createElement("img")

    if (inptValue !== "") {
    //  img.src = 'location icon.png'
    // img.className = "img"
  
    li.append(inptValue)
        all.append(li)


       
 let timeSpan = document.createElement("span");
        timeSpan.textContent = "  " + timeInput.value;
        timeSpan.className = "time"; 

        li.appendChild(timeSpan);
        
        
        input.value = ""
        para.innerText = "YOUR TO DO LIST"
        para.style.color = 'GREEN'

    } else {
        
        para.innerText = "Please enter a to-do!!"
        para.style.color = "red"

}
})
all.addEventListener("click", function (e) {

    if (e.target.tagName === "IMG") {
        
        e.target.parentElement.remove();
}

}

  )

