const secondsContainer = document.querySelector('#seconds')
const minutesContainer = document.querySelector('#minutes')
const hourContainer = document.querySelector('#hours')
const daysContainer = document.querySelector('#days')
const nextYearContainer = document.querySelector('#year')
const loading = document.querySelector('#loading')
const countdownContainer = document.querySelector('#container')

const nextYear = new Date().getFullYear() + 1
const currentTime = new Date(`January 01 ${nextYear} 00:00:00`)

nextYearContainer.textContent = nextYear

const getUnit = unidade => unidade < 10 ? '0' + unidade : unidade

const countdown = ({ days, hours, minutes, seconds }) => {
    secondsContainer.textContent = getUnit(seconds)
    minutesContainer.textContent = getUnit(minutes)
    hourContainer.textContent = getUnit(hours)
    daysContainer.textContent = getUnit(days)
}

const uptadeYear = () => {
    const thisYear = new Date()
    const difference = currentTime - thisYear
    const days = Math.floor(difference / 1000 / 60 / 60 / 24)
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24
    const minutes = Math.floor(difference / 1000 / 60) % 60
    const seconds = Math.floor(difference / 1000) % 60    

    countdown({ days, hours, minutes, seconds })
}

const removerLoading = () => {
    loading.remove()
    countdownContainer.style.display = 'flex'
}

setTimeout(removerLoading, 1000)

setInterval(uptadeYear, 1000)