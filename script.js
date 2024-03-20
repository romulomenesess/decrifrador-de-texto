const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem")

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

function encriptar (stringEncriptada) {
    let matrizCodigo = [["e", "enter"] , ["i", "imes"] , ["a", "ai"] , ["o", "ober"] , ["u", "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i< matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo [i][0]))
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
    return stringEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"] , ["i", "imes"] , ["a", "ai"] , ["o", "ober"] , ["u", "ufat"]]
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for( i = 0 ; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1]))
        stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
    return stringDesencriptada;
}

const $html = document.querySelector('html')
const $checkbox = document.querySelector('#btnModoEscuro')

$checkbox.addEventListener('click', function(){
    $html.classList.toggle('dark-mode')
})

const botaoCopiar = document.getElementById("botaoCopiar")

botaoCopiar.addEventListener("click", (evt)=>{
    campoTexto.select()
    campoTexto.setSelectionRange(0,99999)
    navigator.clipboard.writeText(campoTexto.value)
})