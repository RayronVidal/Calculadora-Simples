function insert(num){
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
    //inserir os numeros no visor 
}

function clean(){
    document.getElementById('resultado').innerHTML = "";
    //limpar calculos
}

function back(){
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
    //apagar somente um
}

function calcular(){
    let resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado)
    }

    else{
        document.getElementById('resultado').innerHTML = "NADA..."
    }
    //calcular
}