//Aqui eu defini uma função para apagar a caixa de texto;
function apagar_AREA1(){
	document.getElementById("texto-codificar").value='';
};

//Aqui eu defini uma função para apagar a caixa de texto;
function apagar_AREA2(){
	document.getElementById("texto-codificado").value='';
};

//Aqui eu defini uma função para selecionar e copiar o todo texto dentro da caixa;
function copiar_Texto() {
        let texto_Copiado = document.getElementById("texto-codificado");
        texto_Copiado.select();
        texto_Copiado.setSelectionRange(0, 99999)
        document.execCommand("copy");
        alert("Mensagem copiada.");
    };
	
//Aqui eu defini uma função para substituir uma string por outra definida usando o metodo replace();
function mudar_Letra_CODIFICADA() {
	const textarea = document.getElementById('texto-codificar');
	let enviar1 = textarea.value;
	let enviar2 = enviar1.replace(/i/gi, "imes").replace(/e/gi, "enter").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat").toLowerCase();
	document.getElementById('texto-codificado').value = enviar2;
};

//Aqui eu defini uma função para substituir uma string por outra definida usando o metodo replace(), neste caso invertendo a ordem da substituição;
function mudar_Letra_DESCODIFICADA() {
	const textarea = document.getElementById('texto-codificado');
	let enviar1 = textarea.value;
	let enviar2 = enviar1.replace(/ai/gi, "a").replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ober/gi, "o").replace(/ufat/gi, "u").toLowerCase();
	document.getElementById('texto-codificar').value = enviar2;
};

//Aqui eu defini uma função para verificar se são inseridos no teclado caracteres diferentes de letras;
const  textarea = document.querySelector("#texto-codificar");
textarea.addEventListener("keypress", function(e){

	if (!verificar_CHAR(e)){
	e.preventDefault();
	};

});        

function verificar_CHAR(e){

	const char = String.fromCharCode(e.keyCode);
	const pattern = '[a-zA-Z0-9_ ]';

	if(char.match(pattern)){
		return true;
	}else{
		alert('Não é permitido caracteres diferentes de letras.')
	};
};

//Aqui eu defini uma função para acionar no id botões as ações definidas nas funções;
document.getElementById('enviar-cript').addEventListener('click', mudar_Letra_CODIFICADA);
document.getElementById('enviar-descript').addEventListener('click', mudar_Letra_DESCODIFICADA);
document.getElementById('enviar-cript').addEventListener('click', apagar_AREA1);
document.getElementById('enviar-descript').addEventListener('click', apagar_AREA2);
