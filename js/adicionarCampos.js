
var qtdeCampos = 2;
var nomeID = "n";

//ADICIONANDO CAMPOS:
function addCampos() { 
       
    var objPai = document.getElementById("camposN");

    //Criando o elemento DIV;
    var objFilho = document.createElement("div");

    //Definindo atributo ao objFilho: (ID)
    objFilho.setAttribute("id", nomeID+qtdeCampos);
        
    //Definindo Atributo ao objFilho (Class):
    objFilho.setAttribute("class", "numero");        

    //Inserindo o elemento no pai:
    objPai.appendChild(objFilho);

    //Escrevendo algo no filho recém-criado:
    document.getElementById(nomeID+qtdeCampos).innerHTML = "<input type='text' id='field"+qtdeCampos+"' name='field"+qtdeCampos+"' class='fieldNumber'>"+
                                                           "<input type='button' onclick='removerCampo("+qtdeCampos+")' class='remover'>";
    qtdeCampos++;
    
}

//REMOVENDO CAMPOS:
function removerCampo(id) {
    
    var objPai = document.getElementById("camposN");
    var objFilho = document.getElementById(nomeID+id);

    //Removendo o DIV com id específico do nó-pai:
    var removido = objPai.removeChild(objFilho);
        
    if(qtdeCampos == 2)
        --qtdeCampos;
    else
        qtdeCampos = 1;
  
}