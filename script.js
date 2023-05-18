// Adicionando elementos

const buttonPlay = document.querySelector('#play')
const buttonPause = document.querySelector('#pause')
const buttonStop = document.querySelector('#stop')
const buttonSet = document.querySelector('#set')

const timerDisplayMinutes = document.querySelector('#minutes')
const timerDisplaySeconds = document.querySelector('#seconds')


const buttonSoundOff = document.querySelector('#sound-off')
const buttonSoundOn = document.querySelector('#sound-on')

let minutes = Number(timerDisplayMinutes.textContent)


let timerTimeOut;

// Funções 



function resetControls () {
    buttonStop.classList.add('hide')
    buttonSet.classList.remove('hide')
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
}

function updateTimerDisplay(minutes,seconds){
    timerDisplayMinutes.textContent = String(minutes).padStart(2, '0')
    timerDisplaySeconds.textContent = String(seconds).padStart(2, '0')
}

function clockTimer (){
  timerTimeOut = setTimeout(() => {

    let seconds = Number(timerDisplaySeconds.textContent)
    let minutes = Number(timerDisplayMinutes.textContent)

    

    if(seconds == 0 && minutes == 0 ){
        resetControls()
        return
    }

    if(seconds == 0){
        seconds = 60
        --minutes
    }
    
    updateTimerDisplay(minutes, seconds - 1)
    clockTimer()
  }, 1000);
}


function resetTimer(){
    updateTimerDisplay(minutes,0)
    clearTimeout(timerTimeOut)
}




// Eventos 

buttonPlay.addEventListener('click', () =>{
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonStop.classList.remove('hide')
    buttonSet.classList.add('hide')

    clockTimer()
})


buttonPause.addEventListener('click', () =>{
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    clearTimeout(timerTimeOut)
})

buttonStop.addEventListener('click', () =>{
   resetControls()
   resetTimer()
})

buttonSet.addEventListener('click', () => {
    let newMinutes = prompt('Digite os minutos?')

    // sinal de (!) fala se for null, undefinned ou 0 fazer a seguinte função
    if(!newMinutes){
        resetTimer()
        return
    }

    minutes = newMinutes
    updateTimerDisplay(minutes, 0)
    
})

buttonSoundOn.addEventListener('click', () =>{
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
})

buttonSoundOff.addEventListener('click', () => {
    buttonSoundOn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')
})
