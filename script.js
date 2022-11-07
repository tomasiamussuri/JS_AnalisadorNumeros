let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }  
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let total = valores.length
        let max = valores[0]
        let min = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > max)
            max = valores[pos]
            if (valores[pos] < min)
            min = valores[pos]
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `O maior número informado foi ${max}.</p>`
        res.innerHTML += `O menor número informado foi ${min}.</p>`
        res.innerHTML += `A soma de todos os valores é ${soma}.</p>`
        res.innerHTML += `A média dos valores digitados é ${media}.</p>`
    }
}
