'use strict'

import produtos from './produtos_atualizados.json' with { type:'json'}

const main = document.querySelector('main')

function criarProdutos(produto) {
        const card = document.createElement('div')
        const img = document.createElement('img')
        const nomeProduto = document.createElement('h3')
        const descricao = document.createElement('p')
        const preco = document.createElement('p')
        const classificacao = document.createElement('div')

        classificacao.classList.add('estrelas')
        card.classList.add('card')
    

        img.src = `img/${[produto.imagem]}`
        nomeProduto.textContent = produto.nome
        descricao.textContent = produto.descricao
        preco.textContent = produto.preco
        classificacao.textContent = '★'.repeat(produto.classificacao) + '☆'.repeat(5-produto.classificacao)

        card.appendChild(img)
        card.appendChild(nomeProduto)
        card.appendChild(descricao)
        card.appendChild(classificacao)
        card.appendChild(preco)
        main.appendChild(card)

    }

    produtos.forEach(criarProdutos)