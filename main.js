const proximoAno = new Date().getFullYear() + 1
const dataInicial = new Date(`January 01 ${proximoAno} 00:00:00`)

const atualizAno = () => {
    const anoAtual = new Date()
    const diferencaAno = dataInicial - anoAtual
    const days = Math.floor(diferencaAno / 1000)

    console.log(diferencaAno)
}

atualizAno()

// const days = document.querySelector('#days')
// const hour = document.querySelector('#hour')
// const minutes = document.querySelector('#minutes')
// const seconds = document.querySelector('#seconds')






// function startTimer(duration, display) {
//     var timer = duration, minutes, seconds;
//     setInterval(function () {
//         minutes = parseInt(timer / 60, 10);
//         seconds = parseInt(timer % 60, 10);
//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;
//         display.textContent = minutes + ":" + seconds;
//         if (--timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
// }
// window.onload = function () {
//     var duration = 60 * 5; // Converter para segundos
//         display = document.querySelector('#timer'); // selecionando o timer
//     startTimer(duration, display); // iniciando o timer
// };

