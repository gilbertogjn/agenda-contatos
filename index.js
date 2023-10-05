const nome = document.getElementById('nome')
const telefone = document.getElementById('telefone')
const corpoTabela = document.querySelector("tbody")
const form = document.querySelector('form')
let nomes = []
let telefones = []

let linhas = ''

form.addEventListener("submit", function (e) {
    e.preventDefault()
    addLinha()
})

function addLinha() {
    if (nomes.includes(nome.value) || telefones.includes(telefone.value)) {
        alert('Contato já existente.')
    } else {
        let linha = '<tr>'
        linha += `<td>${nome.value}</td>`
        linha += `<td>${telefone.value}</td>`
        linha += '</tr>'
        linhas += linha

        nomes.push(nome.value)
        telefones.push(telefone.value)

        nome.value = ''
        telefone.value = ''

        corpoTabela.innerHTML = linhas
    }
}

const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
}

const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{2})(\d)/, "($1) $2")
    value = value.replace(/(\d)(\d{4})$/, "$1-$2")
    return value
}