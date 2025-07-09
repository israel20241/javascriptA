// Exercício 1
function somar(){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    // console.log("Resultado: " + (n1 + n2));
    document.getElementById("resultado").innerText = "Resultado: " + (n1 + n2);
}
function verificar(){
    let idade = Number(document.getElementById("idade").value);
    if(idade >= 18){
        document.getElementById("verificacao").innerText = "Maior de idade";
    }
    else{
        document.getElementById("verificacao").innerText = "Menor de idade";
    }
}
function contagem(){
    let texto = Text(document.getElementById("texto").value);
    document.getElementById("contagem").innerText = "Contagem em um parágrafo na página: " = texto.length;
}