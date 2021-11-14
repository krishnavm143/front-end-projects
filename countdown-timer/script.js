const newYears = '3 May  2022'
const displayDays = document.getElementById('days-c')
const displayHours = document.getElementById('hours-c')
const displayMin = document.getElementById('min-c')
const displaySec = document.getElementById('sec-c')

function countdown() {
  const newYearsDate = new Date(newYears)
  const currentDate = new Date()
  console.log(newYearsDate - currentDate)
  const totalSeaconds = (newYearsDate - currentDate) / 1000
  const days = Math.floor(totalSeaconds / 3600 / 24)
  //   const hours=Math.floor(days/  24);
  const hours = Math.floor(totalSeaconds / 3600) % 24
  const minutes = Math.floor(totalSeaconds / 60) % 60
  const sec = Math.floor(totalSeaconds) % 60
  //   console.log(totalSeaconds, days, hours,minutes,sec);
  countChange(days, hours, minutes, sec)
  //   displayDays.style.innerText=days
  //   console.log()
}
// countdown()
setInterval(countdown, 1000)

function countChange(days, hours, minutes, sec) {
  // console.log()
  // console.log(days)
  displayDays.innerText = days
  displayHours.innerText = hours
  displayMin.innerText = minutes
  displaySec.innerText = sec
}
function formatTime(time) {
  return
}
