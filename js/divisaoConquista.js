
var i = 1;
var cont = 0;
var x = [];

function corpo(NomeCampo){

	//Capturando todos os valores digitados no campo Input do html:
    for(var i = 0; i<=1000; i++){

        if(document.getElementById(NomeCampo+i) == null || 
            document.getElementById(NomeCampo+i).value == null || 
             document.getElementById(NomeCampo+i).value == ""){
            break;
        }else{
            x[cont] = parseInt(document.getElementById(NomeCampo+i).value);
            cont++;
        }
    }

    //Tornando a tag com o ID visível:
    document.getElementById("Resultado").style.display = 'block';

    //Inserindo o conteúdo do Array na tag do ID:
    document.getElementById("numerosInserido").innerHTML = x;

    //Inserindo o conteúdo da Função na tag do ID:
    document.getElementById("numerosOrdenado").innerHTML = mergeSort(x);

}

function mergeSort(vetor){

    if (vetor.length < 2)
        return vetor;
 
    var meio = parseInt(vetor.length / 2);
    var esquerda   = vetor.slice(0, meio);
    var direita  = vetor.slice(meio, vetor.length);
 
    inserirElemento(i, esquerda, direita);

    i++;

    return merge(mergeSort(esquerda), mergeSort(direita));
}
 
function merge(esquerda, direita){

    var result = [];
 
    while (esquerda.length != 0 && direita.length != 0) {

        if (esquerda[0] <= direita[0]) {
            result.push(esquerda.shift());
        } else {
            result.push(direita.shift());
        }

    }
 
    while (esquerda.length)
        result.push(esquerda.shift());
 
    while (direita.length)
        result.push(direita.shift());
 	
    return result;

}

function inserirElemento(i, esquerda, direita){
	//Seleciona a tag do ID:
	var elemento = document.querySelector('#numerosPartes');
	//Elemento a ser inserido:
	var elementoInserir = "<tr>"+
						  "<td>"+i+"</td>"+
						  "<td>"+esquerda+"</td>"+
						  "<td>"+direita+"</td>"+
						  "</tr>";
	//Adicionando o elemento na tag do ID selecionado:
	elemento.insertAdjacentHTML('beforebegin', elementoInserir);
}