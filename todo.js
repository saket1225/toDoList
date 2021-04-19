let todoListCard = document.querySelector(".todoListCard")
let addButton = document.querySelector(".plusLogo")
let todoListDiv = document.querySelector(".todoDiv")

function addToDo () {
    let input = document.querySelector(".input").value

    document.querySelector(".input").value = ""

    if (input.length >= 1) {

        var element = `<center><div class=\"todoList incompletetodo\"><input class=\"todoListCard\" type=\"text\" maxlength=\"80\" value=\"${input}\"></input><img src=\"images/checkbox.svg\" class=\"tick\"><img src=\"images/delete.svg\" class=\"delete\"></div></center>`

        todoListDiv.innerHTML = element + todoListDiv.innerHTML
    }

    else{}
}

function deleteDiv () {
    let deleteIcons = document.querySelectorAll(".delete")

    for (const deleteIcon of deleteIcons){
        deleteIcon.addEventListener("click", ()=>{
            deleteIcon.parentNode.style.transform = 'rotate(5deg)'
            deleteIcon.parentNode.style.opacity = 0;
            setTimeout(()=>{
                deleteIcon.parentNode.remove()
            }, 200)
        })
    }
}

function completed() {
    let completedIcons = document.querySelectorAll(".tick")

    for (const completedIcon of completedIcons){
            completedIcon.addEventListener("click", ()=>{
                completedIcon.parentNode.classList.add("completedToDo")
                completedIcon.parentNode.classList.remove("incompletetodo")

                completedIcon.previousSibling.classList.add("completedToDoText")
            })
        }
    }


addButton.addEventListener("click", () => {
    addToDo()
    deleteDiv()
    completed()
})

document.addEventListener("keypress", (e)=>{
    if (e.key === "Enter"){
        addToDo()
        deleteDiv()
        completed()
    }
})

let filterDropdown = document.querySelector(".displayType")

function filter() {
    const divs = document.querySelectorAll('.todoList');

    if (filterDropdown.value == "completed"){
        divs.forEach((div) => {
            if (div.classList.contains('incompletetodo')){
                div.style.display = 'none'
            }

            else {
                div.style.display = 'block'
            }
        })
    }


    else if (filterDropdown.value == "incompleted"){
        divs.forEach((div) => {
            if (div.classList.contains('completedToDo')){
                div.style.display = 'none'
            }

            else {
                div.style.display = 'block'
            }
        })
    }

        else {
            divs.forEach((div) => {
                div.style.display = 'block'
        })
    }
}
