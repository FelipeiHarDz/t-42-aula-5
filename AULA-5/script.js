

/* Podemos escrever funções dessa forma tbm

Arrow Function

const adicionarCarro = () => {

    

} */

​

const LISTA_CARROS = []

​

function limparCampos() {

    document.getElementById('placa').value = ''

    document.getElementById('modelo').value = ''

    document.getElementById('marca').value = ''

    document.getElementById('cor').value = ''

}

​

​

function adicionarCarro(){

  let placaInput = document.getElementById('placa').valueb

  let modeloInput = document.getElementById('modelo').value

  let marcaInput = document.getElementById('marca').value

  let corInput = document.getElementById('cor').value

​

  if(placaInput == "" || placaInput==null || placaInput == undefined) {

    alert('A placa é obrigatoria!!!!!!')

    return

  }

​

  const carro = {

    placa: placaInput,

    modelo: modeloInput,

    marca: marcaInput,

    cor: corInput,

    horaEntrada: new Date()

  }

​

  LISTA_CARROS.push(carro)

  

  limparCampos()

​

  montarLista()

}

​

​

function montarLista() {

    if(LISTA_CARROS.length > 0) {

        const elementoLista = document.getElementById('listaCarros')

        elementoLista.innerHTML = ''

        for (let index = 0; index < LISTA_CARROS.length; index++) {

            const carro = LISTA_CARROS[index];

            //console.log(carro)

            //const aux = '<div> Placa: ' + carro.placa + ' - Cor: ' + carro.cor + ' - Marca: ' +  carro.marca + ' - Modelo: ' + carro.modelo + '</div>'

            const item = `<div>Placa: ${carro.placa} - Cor: ${carro.cor} - Marca: ${carro.marca} - Modelo: ${carro.modelo} </div>`

            elementoLista.innerHTML += item 

        }

    }

}

