const secondsContainer = document.querySelector('#seconds')
const minutesContainer = document.querySelector('#minutes')
const hourContainer = document.querySelector('#hours')
const daysContainer = document.querySelector('#days')
const nextYearContainer = document.querySelector('#year')
const loading = document.querySelector('#loading')
const contadorContainer = document.querySelector('#container')

const proximoAno = new Date().getFullYear() + 1
const dataInicial = new Date(`January 01 ${proximoAno} 00:00:00`)

nextYearContainer.textContent = proximoAno

const inserirNumero = unidade => unidade < 10 ? '0' + unidade : unidade

const inserirContador = ({ days, hours, minutes, seconds }) => {
    secondsContainer.textContent = inserirNumero(seconds)
    minutesContainer.textContent = inserirNumero(minutes)
    hourContainer.textContent = inserirNumero(hours)
    daysContainer.textContent = inserirNumero(days)
}

const atualizaAno = () => {
    const anoAtual = new Date()
    const diferencaAno = dataInicial - anoAtual
    const days = Math.floor(diferencaAno / 1000 / 60 / 60 / 24)
    const hours = Math.floor(diferencaAno / 1000 / 60 / 60) % 24
    const minutes = Math.floor(diferencaAno / 1000 / 60) % 60
    const seconds = Math.floor(diferencaAno / 1000) % 60    

    inserirContador({ days, hours, minutes, seconds })
}

const removerLoading = () => {
    loading.remove()
    contadorContainer.style.display = 'flex'
}

setTimeout(removerLoading, 1000)

setInterval(atualizaAno, 1000)