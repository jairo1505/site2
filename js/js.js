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
	var largura = window.innerWidth;
	if (largura < 800) {
			result.innerHTML = "<div class=\"contato\">";
			result.innerHTML += "<h3 class=\"left\">Contato:</h3>";
			result.innerHTML += "<p class=\"left\">Jaraguá Telecomunicações Ltda - Comércio e Assistência Técnica</p>";
			result.innerHTML += "<p class=\"left\">Rua Bernardo Dornbusch, 590 - Sala 02 - Baependi</p>";
			result.innerHTML += "<p class=\"left\">89256-100 - Jaraguá do Sul - SC</p>";
			result.innerHTML += "<p class=\"left\">Fone: 47 3275-2444</p>";
			result.innerHTML += "<p class=\"left\">email: jaraguatel@netuno.com.br</p>";
			result.innerHTML += "<h3 class=\"left\">Horário de funcionamento:</h3>";
			result.innerHTML += "<p class=\"left\">De segunda à sexta das 7:30h às 12h e das 13:30h às 17:48h</p>";
			result.innerHTML += "<iframe class=\"map\" src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d842.6857610437048!2d-49.07337271952065!3d-26.482224062623224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94de9505c17ec6f1%3A0x12ad5ff13f11f847!2sR.+Bernardo+Dornbusch%2C+590+-+Vila+Baependi%2C+Jaragu%C3%A1+do+Sul+-+SC%2C+89256-100!5e0!3m2!1spt-BR!2sbr!4v1552675831499\" width=\"100%\" height=\"350\" frameborder=\"0\" style=\"border:0\" align=\"center\" allowfullscreen></iframe>";
			result.innerHTML += "<hr/></div>";
		}else{
			result.innerHTML = "<div class=\"contato\">";
			result.innerHTML += "<iframe class=\"map\" src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d842.6857610437048!2d-49.07337271952065!3d-26.482224062623224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94de9505c17ec6f1%3A0x12ad5ff13f11f847!2sR.+Bernardo+Dornbusch%2C+590+-+Vila+Baependi%2C+Jaragu%C3%A1+do+Sul+-+SC%2C+89256-100!5e0!3m2!1spt-BR!2sbr!4v1552675831499\" width=\"450\" height=\"350\" frameborder=\"0\" style=\"border:0\" align=\"right\" allowfullscreen></iframe>";
			result.innerHTML += "<h3 class=\"left\">Contato:</h3>";
			result.innerHTML += "<p class=\"left\">Jaraguá Telecomunicações Ltda - Comércio e Assistência Técnica</p>";
			result.innerHTML += "<p class=\"left\">Rua Bernardo Dornbusch, 590 - Sala 02 - Baependi</p>";
			result.innerHTML += "<p class=\"left\">89256-100 - Jaraguá do Sul - SC</p>";
			result.innerHTML += "<p class=\"left\">Fone: 47 3275-2444</p>";
			result.innerHTML += "<p class=\"left\">email: jaraguatel@netuno.com.br</p>";
			result.innerHTML += "<h3 class=\"left\">Horário de funcionamento:</h3>";
			result.innerHTML += "<p class=\"left\">De segunda à sexta das 7:30h às 12h e das 13:30h às 17:48h</p>";
			result.innerHTML += "</div><br/><br/><br/><br/>";
		}
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