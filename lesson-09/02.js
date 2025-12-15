const startButton = document.getElementById('start')
const cancelButton = document.getElementById('cancel')
const countdownDisplay = document.getElementById('countdown')

let timerId = null
let counter = 3


function stopTimer() {
  if (timerId) {
    clearInterval(timerId)
    timerId = null
  }
}


function updateDisplay(text) {
  countdownDisplay.textContent = text
}


startButton.addEventListener('click', () => {

  stopTimer()


  counter = 3

  // Немедленно отображаем 3
  updateDisplay(counter)


  timerId = setInterval(() => {
    counter--

    if (counter > 0) {
      updateDisplay(counter)
    } else {
      updateDisplay('🚀')
      stopTimer()
    }
  }, 1000)
})


cancelButton.addEventListener('click', () => {
  // Останавливаем таймер только если он запущен
  if (timerId) {
    stopTimer()
    updateDisplay('Отменено')
  }
})