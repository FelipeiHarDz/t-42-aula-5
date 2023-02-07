/* 
  igual ==
  menor <
  maior >
  menor igual <=
  maior igual =<
  diferente !=
  negação ! 
*/


var contadorDeId = 1;




function construirElemento(id, valor) {
    var item = `<div id="${id}" class="item">
        <div onclick="marcarTarefa(${id})" class="item-icone">
            <i id="icone_${id}" class="mdi mdi-circle-outline"></i>
        </div>
        <div onclick="marcarTarefa(${id})" class="item-nome">
            ${valor}
        </div>
        <div class="item-botao">
            <button onclick="deletar(${id})" class="delete"><i class="mdi mdi-delete-forever"></i> Deletar</button>
        </div>
    </div>`;

  return item
}


//marcar como concluida
//criar usando enter

function deletar(id) {
    let elementoParaDeletar = document.getElementById(id)
    elementoParaDeletar.remove()
}

function addTarefa() {
    var campo = document.getElementById("inputTarefa")
    //1 - Adicionar tarefa
    //LER O CAMPO
    var nomeTarefa = campo.value
    //SE O CAMPO for VAZIO, soltar um alerta
    if(nomeTarefa == "") {
        alert("Campo Obrigatório")
    } else {
        //Inserir valor na lista
        var elementoCriado = construirElemento(contadorDeId, nomeTarefa)
        document.getElementById("areaLista").innerHTML += elementoCriado
        contadorDeId++
        campo.value = ""
    }

}



function marcarTarefa(id) {

    if(id == "" || id==null || id == undefined ){ 
       alert("Nao pode usar sem um ID ")

    }


    let elemento = document.getElementById(id)
    let classeDeEstilo = elemento.getAttribute("class")
    let icone = document.getElementById(`icone_${id}`)

    if(classeDeEstilo == 'item') {
        elemento.classList.add("clicado")
        icone.classList.remove('mdi-circle-outline')
        icone.classList.add('mdi-check-circle')
        
    } else {    
        elemento.classList.remove("clicado")
        icone.classList.remove('mdi-check-circle')
        icone.classList.add('mdi-circle-outline')
            
}

}

