const secondsContainer = document.querySelector('#seconds')
const minutesContainer = document.querySelector('#minutes')
const hourContainer = document.querySelector('#hour')
const daysContainer = document.querySelector('#days')
const nextYearContainer = document.querySelector('#year')
const loading = document.querySelector('#loading')
const contadorContainer = document.querySelector('#container')


const proximoAno = new Date().getFullYear() + 1
const dataInicial = new Date(`January 01 ${proximoAno} 00:00:00`)

nextYearContainer.textContent = proximoAno

const atualizaAno = () => {
    const anoAtual = new Date()
    const diferencaAno = dataInicial - anoAtual
    const days = Math.floor(diferencaAno / 1000 / 60 / 60 / 24)
    const hours = Math.floor(diferencaAno / 1000 / 60 / 60) % 24
    const minutes = Math.floor(diferencaAno / 1000 / 60) % 60
    const seconds = Math.floor(diferencaAno / 1000) % 60

    secondsContainer.textContent = seconds < 10 ? '0' + seconds : seconds
    minutesContainer.textContent = minutes < 10 ? '0' + minutes : minutes
    hourContainer.textContent = hours < 10 ? '0' + hours : hours
    daysContainer.textContent = days < 10 ? '0' + days : days
    
}

setTimeout(() => {
    loading.remove()
    contadorContainer.style.display = 'flex'
}, 1000)

setInterval(atualizaAno, 1000)



