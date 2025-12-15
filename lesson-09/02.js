const startButton = document.getElementById('start')
const cancelButton = document.getElementById('cancel')
const countdownDisplay = document.getElementById('countdown')

let timerId = null
let counter = 0

function stopTimer() {
  if (timerId) {
    clearInterval(timerId)
    timerId = null
  }
}

startButton.addEventListener('click', () => {
  if (timerId !== null) {
    return
  }

  counter = 3
  countdownDisplay.textContent = counter

  timerId = setInterval(() => {
    counter--

    if (counter > 0) {
      countdownDisplay.textContent = counter
    } else {
      countdownDisplay.textContent = '🚀'
      stopTimer()
    }
  }, 1000)
})

cancelButton.addEventListener('click', () => {
  if (timerId !== null) {
    stopTimer()
    countdownDisplay.textContent = 'Отменено'
  }
})