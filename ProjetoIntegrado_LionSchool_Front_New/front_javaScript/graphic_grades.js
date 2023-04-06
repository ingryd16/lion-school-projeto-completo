'use strict'
import {getGraphicCourses} from "../endPoints/graphic_grades.js"
const nameStudent = localStorage.getItem('$nameStudent')

const spreadsheetGrades = document.getElementById('spreadsheet_grades')

const studentSpreadsheet = new Chart(spreadsheetGrades, {
    type: 'line',  
})

const createCard = ($date, $nameStudent) => {
    const div = document.createElement('div')

    const aluno_image = document.createElement('div')
    aluno_image.classList.add('foto_aluno')

    const img = document.createElement('img')
    img.classList = 'imagem-aluno'
    img.alt ='Foto do aluno'
    img.src = $date.foto

    const aluno_nome = document.createElement('div')
    aluno_nome.classList.add('nome-aluno')

    const nome = document.createElement('p')
    nome.classList.add('aluno-nome')
    nome.innerHTML = $date.nome.toUpperCase()

    aluno_image.append(img)
    aluno_nome.append(nome)
    div.append(aluno_image, aluno_nome)

    div.addEventListener('click', function(){
        const nameStudent = div.innerText
        console.log(nameStudent)
        localStorage.setItem('$nameStudent', nameStudent)
        window.open('graphics_grades.html')
    })

    return div
}

const loadCard = async ($nameStudent) => {
    const student = await getGraphicCourses($nameStudent)
    console.log(student)
    const cards = document.querySelector('.aluno-card')

    const listCard = student.alunos.map($date => createCard($date))

    cards.replaceChildren(...listCard)
}

const name = localStorage.getItem('$nameStudent')

loadCard(name)