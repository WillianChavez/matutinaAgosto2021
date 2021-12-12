import { titulos } from './titulos.js'
import { dias } from './dias.js'

const resultadosDIV = document.querySelectorAll('.resultado')
const grupoBotones = document.querySelectorAll('.botones')
const botonesMostrar = document.querySelectorAll('.disable')

let botonesEmpezar = []

grupoBotones.forEach((botones) => botonesEmpezar.push(botones.firstElementChild))

const obtenerNumeroAleatorio = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

const crearListItem = (items) => {
    const lista = document.createElement('UL')
    const fragmento = document.createDocumentFragment()
    items.forEach((item) => {
        const li = document.createElement('LI')
        li.classList.add('list-item')
        li.textContent = item
        fragmento.appendChild(li)
    })

    lista.appendChild(fragmento)
    return lista
}

const asignarTiempoDeVisibilidad = (timeoutActivo, milisegundos) => {
    timeoutActivos[timeoutActivo] = setTimeout(() => {
        resultadosDIV[timeoutActivo].textContent = ''
    }, milisegundos)
}
let timeoutActivos = []
// ronda 1
botonesEmpezar[0].addEventListener('click', () => {
    clearTimeout(timeoutActivos[0])
    const numeroAleatorio = obtenerNumeroAleatorio(1, 31)
    resultadosDIV[0].textContent = numeroAleatorio

    asignarTiempoDeVisibilidad(0, 5000)
})

// ronda 2
let numerosRonda2
botonesEmpezar[1].addEventListener('click', () => {
    clearTimeout(timeoutActivos[1])
    numerosRonda2 = []
    botonesMostrar[0].classList.remove('disable')
    let numeroAleatorio1, numeroAleatorio2, numeroAleatorio3
    do {
        numeroAleatorio1 = obtenerNumeroAleatorio(1, 31)
        numeroAleatorio2 = obtenerNumeroAleatorio(1, 31)
        numeroAleatorio3 = obtenerNumeroAleatorio(1, 31)
    } while (numeroAleatorio1 == numeroAleatorio2 || numeroAleatorio1 == numeroAleatorio3 || numeroAleatorio2 == numeroAleatorio3)

    numerosRonda2.push(numeroAleatorio1, numeroAleatorio2, numeroAleatorio3)
    resultadosDIV[1].textContent = `${numeroAleatorio1}, ${numeroAleatorio2}, ${numeroAleatorio3}`

    asignarTiempoDeVisibilidad(1, 5000)
})

botonesMostrar[0].addEventListener('click', () => {
    clearTimeout(timeoutActivos[1])
    resultadosDIV[1].textContent = ''
    resultadosDIV[1].textContent = numerosRonda2.join(', ')

    asignarTiempoDeVisibilidad(1, 5000)
})

// ronda 3
let listaDeTitulos
botonesEmpezar[2].addEventListener('click', () => {
    clearTimeout(timeoutActivos[2])
    botonesMostrar[1].classList.remove('disable')
    listaDeTitulos = []
    let titulo1, titulo2, titulo3

    do {
        titulo1 = titulos[obtenerNumeroAleatorio(0, 30)]
        titulo2 = titulos[obtenerNumeroAleatorio(0, 30)]
        titulo3 = titulos[obtenerNumeroAleatorio(0, 30)]
    } while (titulo1 == titulo2 || titulo1 == titulo3 || titulo3 == titulo2)

    listaDeTitulos = crearListItem([titulo1, titulo2, titulo3])

    resultadosDIV[2].textContent = ''
    resultadosDIV[2].appendChild(listaDeTitulos)

    asignarTiempoDeVisibilidad(2, 5000)
})

botonesMostrar[1].addEventListener('click', () => {
    clearTimeout(timeoutActivos[2])
    resultadosDIV[2].textContent = ''
    resultadosDIV[2].appendChild(listaDeTitulos)

    asignarTiempoDeVisibilidad(2, 5000)
})
// ronda 4
let diaRonda4
botonesEmpezar[3].addEventListener('click', () => {
    clearTimeout(timeoutActivos[3])
    botonesMostrar[2].classList.remove('disable')
    diaRonda4 = ''
    diaRonda4 = dias[obtenerNumeroAleatorio(0, 6)]
    resultadosDIV[3].textContent = diaRonda4

    asignarTiempoDeVisibilidad(3, 5000)
})

botonesMostrar[2].addEventListener('click', () => {
    clearTimeout(timeoutActivos[3])
    resultadosDIV[3].textContent = diaRonda4

    asignarTiempoDeVisibilidad(3, 5000)
})

// ronda 5
let numeroRonda5
botonesEmpezar[4].addEventListener('click', () => {
    clearTimeout(timeoutActivos[4])
    botonesMostrar[3].classList.remove('disable')
    numeroRonda5 = obtenerNumeroAleatorio(1, 5)
    resultadosDIV[4].textContent = numeroRonda5

    asignarTiempoDeVisibilidad(4, 5000)
})
botonesMostrar[3].addEventListener('click', () => {
    clearTimeout(timeoutActivos[4])
    resultadosDIV[4].textContent = numeroRonda5

    asignarTiempoDeVisibilidad(4, 5000)
})
