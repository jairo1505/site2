var result = document.getElementById("conteudo");
function inicio(){
	show();
	document.getElementById("MenuInicio").className = "active";
	document.getElementById("MenuGaleria").className = "";
	document.getElementById("MenuSobre").className = "";
	document.getElementById("MenuContato").className = "";
	document.getElementById("MenuSuporte").className = "";
	result.innerHTML = "<div id=\"inicio\">";
	result.innerHTML += "<h1>Bem Vindo à</h1><br/>";
	result.innerHTML += "<img src=\"img/JTEL-logo.png\" alt=\"Logo Jaraguá Telecomunicações\" width=\"95%\"/><br/><br/>";
	result.innerHTML += "</div>";
}
function galeria(){
	show();
	document.getElementById("MenuInicio").className = "";
	document.getElementById("MenuGaleria").className = "active";
	document.getElementById("MenuSobre").className = "";
	document.getElementById("MenuContato").className = "";
	document.getElementById("MenuSuporte").className = "";
	result.innerHTML = "<div id=\"galeria\">";
	result.innerHTML += "<h1>Página em Construção</h1>";
	result.innerHTML += "</div>";
}
function sobre(){
	show();
	document.getElementById("MenuInicio").className = "";
	document.getElementById("MenuGaleria").className = "";
	document.getElementById("MenuSobre").className = "active";
	document.getElementById("MenuContato").className = "";
	document.getElementById("MenuSuporte").className = "";
	result.innerHTML = "<div id=\"sobre\">";
	result.innerHTML += "<h1>Página em Construção</h1>";
	result.innerHTML += "</div>";
}
function contato(){
	show();
	document.getElementById("MenuInicio").className = "";
	document.getElementById("MenuGaleria").className = "";
	document.getElementById("MenuSobre").className = "";
	document.getElementById("MenuContato").className = "active";
	document.getElementById("MenuSuporte").className = "";
	
	result.innerHTML = "<div class=\"contato\">";
	result.innerHTML += "<h3>Contato:</h3>";
	result.innerHTML += "<p><font color=\"red\">Informamos que desde 24/12/2021 não dispomos mais de endereço físico.</font></p>";
	result.innerHTML += "<p>Telefone/WhatsApp: <a href=\"tel:4732752444\">(47) 3275-2444</a></p>";
	result.innerHTML += "<p>E-mail: <a href=\"mailto:jaraguatel@netuno.com.br\">jaraguatel@netuno.com.br</a></p>";
	result.innerHTML += "<h3>Horário de funcionamento:</h3>";
	result.innerHTML += "<p>De segunda à sexta das 9h às 12h e das 13h às 17h</p>";
	result.innerHTML += "</div><br/><br/><br/><br/>";
}
function suporte(){
	show();
	document.getElementById("MenuInicio").className = "";
	document.getElementById("MenuGaleria").className = "";
	document.getElementById("MenuSobre").className = "";
	document.getElementById("MenuContato").className = "";
	document.getElementById("MenuSuporte").className = "active";
	result.innerHTML = "<h1>Suporte:</h1>";
	result.innerHTML += "<h3>Seu IP:</h3><iframe src=\"https://backend.jaraguatel.com.br/ip/\" frameborder=\"0\" scrolling=\"NO\" height=\"130px\" style=\"height: 130px;\" width=\"400px;\"></iframe><br/>";
	result.innerHTML += "<h3>Verifica Porta:</h3><iframe src=\"https://backend.jaraguatel.com.br/verifica_porta/\" frameborder=\"0\" scrolling=\"NO\" height=\"160px\" style=\"height: 160px;\" width=\"300px;\"></iframe>";
	result.innerHTML += "<h1>Downloads:</h1><br/>";
	result.innerHTML += "<button class=\"button\" onclick=\"window.open('https://backend.jaraguatel.com.br/arquivos/Instalador SIMNEXT-1.18.19.exe_.zip','_blank')\"><img class=\"icon\" src=\"img/download.svg\" /> SIM Next v1.18.19</button><br/><br/>";
	result.innerHTML += "<button class=\"button\" onclick=\"window.open('https://backend.jaraguatel.com.br/arquivos/simplus_setup_-_31_08_2016.exe','_blank')\"><img class=\"icon\" src=\"img/download.svg\" /> SIM Plus v31/08/16</button><br/><br/>";
	result.innerHTML += "<button class=\"button\" onclick=\"window.open('https://anydesk.com/pt/downloads/windows','_blank')\"><img class=\"icon\" src=\"img/download.svg\" /> AnyDesk</button><br/><br/>";
	result.innerHTML += "<button class=\"button\" onclick=\"window.open('https://backend.jaraguatel.com.br/arquivos/AA_v3.exe','_blank')\"><img class=\"icon\" src=\"img/download.svg\" /> Ammyy admin</button><br/><br/>";
	result.innerHTML += "<button class=\"button\" onclick=\"window.open('https://backend.jaraguatel.com.br/arquivos/Firefox28.exe')\"><img class=\"icon\" src=\"img/download.svg\" /> Mozilla Firefox 28</button><br/><br/>";
	result.innerHTML += "<button class=\"button\" onclick=\"window.open('https://backend.jaraguatel.com.br/arquivos/Firefox40.exe')\"><img class=\"icon\" src=\"img/download.svg\" /> Mozilla Firefox 40</button>";
}
var i = 0;
function show(){
	if (window.innerWidth <= 800) {
		if(i%2==0){
			document.getElementById('menu1').style.display='block';
			document.getElementById('menu2').style.display='block';
			document.getElementById('menu3').style.display='block';
			document.getElementById('menu4').style.display='block';
			//document.getElementById('menu5').style.display='block';
			document.getElementById('menu6').style.display='block';
		}else{
			document.getElementById('menu1').style.display='none';
			document.getElementById('menu2').style.display='none';
			document.getElementById('menu3').style.display='none';
			document.getElementById('menu4').style.display='none';
			//document.getElementById('menu5').style.display='none';
			document.getElementById('menu6').style.display='none';
		}
		i++;
	}
}

window.addEventListener("resize", resizeScreen);

function resizeScreen() {
	if (window.innerWidth > 800) {
		document.getElementById('menu1').style.display='block';
		document.getElementById('menu2').style.display='block';
		document.getElementById('menu3').style.display='block';
		document.getElementById('menu4').style.display='block';
		//document.getElementById('menu5').style.display='block';
		document.getElementById('menu6').style.display='block';
	} else {
		document.getElementById('menu1').style.display='none';
		document.getElementById('menu2').style.display='none';
		document.getElementById('menu3').style.display='none';
		document.getElementById('menu4').style.display='none';
		//document.getElementById('menu5').style.display='none';
		document.getElementById('menu6').style.display='none';
		i=0;
	}
}

contato();
show();