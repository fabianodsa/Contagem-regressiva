const secondsContainer = document.querySelector('#seconds')
const daysContainer = document.querySelector('#days')
const hourContainer = document.querySelector('#hour')
const minutesContainer = document.querySelector('#minutes')

const proximoAno = new Date().getFullYear() + 1
const dataInicial = new Date(`January 01 ${proximoAno} 00:00:00`)

const atualizAno = () => {
    const anoAtual = new Date()
    const diferencaAno = dataInicial - anoAtual
    const days = Math.floor(diferencaAno / 1000 / 60 / 60 / 24)
    const hours = Math.floor(diferencaAno / 1000 / 60 / 60) % 24
    const minutes = Math.floor(diferencaAno / 1000 / 60) % 60
    const seconds = Math.floor(diferencaAno / 1000) % 60

    secondsContainer.textContent = seconds < 10 ? '0' + seconds : seconds
    daysContainer.textContent = days < 10 ? '0' + days : days
    secondsContainer.textContent = seconds < 10 ? '0' + seconds : seconds
    secondsContainer.textContent = seconds < 10 ? '0' + seconds : seconds
}

setInterval(atualizAno, 1000)



