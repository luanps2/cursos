function tratarErroeLancar(erro) {
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.nome,
        msg: erro.message,
        date: new Date
    
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroeLancar(e)
    } finally {
        console.log('final')
    }
}


const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)