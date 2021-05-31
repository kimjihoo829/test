const form = document.querySelector('.js-form'),
      input = form.querySelector('input'),
      gretting = document.querySelector('.js-grettings')

const USER_LS = "currentUser",
      SHOWING_CN = "showing"

const text = document.querySelector(".js-toDoForm")

function saveName(text){
    localStorage.setItem(USER_LS, text)
}

function handleSubmit(event){
    event.preventDefault()
    const currentValue = input.value
    paintGretting(currentValue)
    saveName(currentValue)
}

function askForName(){
    form.addEventListener('submit', handleSubmit)
    form.classList.add(SHOWING_CN)
}

function paintGretting(text){
    form.classList.remove(SHOWING_CN)
    gretting.classList.add(SHOWING_CN)
    gretting.innerText = `HELLO  ${text}!`
    }

function loadName(){
    const currentUser = localStorage.getItem(USER_LS)
    if(currentUser === null){
        askForName()
    } else {
        paintGretting(currentUser)
    }
}

function init(){
    loadName()
}

init()