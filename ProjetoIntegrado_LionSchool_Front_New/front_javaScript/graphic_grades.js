/* 'use strict'
import {getGraphicCourses} from "../endPoints/graphic_grades.js"

const createCard = ($cards) => {
    const div = document.createElement('div')
    div.classList.add('aluno-card')

    const imagem_aluno = document.createElement('div')
    imagem_aluno.classList.add('foto-aluno')

    const img = document.createElement('img')
    img.classList.add('imagem-aluno')
    img.alt = 'Foto do aluno'
    img.src = $cards.img

    const nome_aluno = document.createElement('div')
    div.classList.add('nome-aluno')

    const aluno_nome = document.createElement('p')
    title.classList.add('aluno-nome')
    title.textContent = $cards.nome

    imagem_aluno.append(img)
    nome_aluno.append(aluno_nome)
    div.append(imagem_aluno,nome_aluno)

    return div
}

const loadCards = async() => {
    const cards = await getGraphicCourses()
}

loadCards() */