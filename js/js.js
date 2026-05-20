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
async function suporte(){
    show();
    document.getElementById("MenuInicio").className = "";
    document.getElementById("MenuGaleria").className = "";
    document.getElementById("MenuSobre").className = "";
    document.getElementById("MenuContato").className = "";
    document.getElementById("MenuSuporte").className = "active";

    result.innerHTML = "<h1>Suporte:</h1>";
    result.innerHTML += "<h3>Seu IP:</h3>";
    result.innerHTML += "<div id=\"suporte-ip\">Carregando...</div><br/>";

    // helper: expand IPv6 shorthand to full 8 hextets
    function expandIPv6(ip) {
        if (ip.indexOf('::') === -1) return ip;
        let [left, right] = ip.split('::');
        let leftParts = left ? left.split(':') : [];
        let rightParts = right ? right.split(':') : [];
        let missing = 8 - (leftParts.length + rightParts.length);
        let zeros = new Array(missing).fill('0');
        return [...leftParts, ...zeros, ...rightParts].map(h => h.padStart(4,'0')).join(':');
    }

    // build arpa name for PTR query
    function ptrNameFor(ip){
        if (ip.includes(':') && !ip.includes('.')){ // IPv6
            let full = expandIPv6(ip);
            // remove colons and split into nibbles, reverse order
            let nibbles = full.replace(/:/g,'').split('');
            return nibbles.reverse().join('.') + '.ip6.arpa';
        } else { // IPv4
            return ip.split('.').reverse().join('.') + '.in-addr.arpa';
        }
    }

    try {
        // get public IP
        let r = await fetch('https://api.ipify.org/?format=json');
        let j = await r.json();
        let ip = j.ip || 'N/A';

        // determine type
        let tipoHtml = (ip.indexOf(':') !== -1 && ip.indexOf('.') === -1)
            ? '<font color=\"green\">IPv6</font>'
            : '<font color=\"red\">IPv4</font>';

        // attempt reverse DNS using Cloudflare DNS-over-HTTPS
        let host = 'N/A';
        try {
            let ptr = ptrNameFor(ip);
            let dohUrl = 'https://cloudflare-dns.com/dns-query?name=' + encodeURIComponent(ptr) + '&type=PTR';
            let doh = await fetch(dohUrl, { headers: { 'accept': 'application/dns-json' } });
            if (doh.ok) {
                let dohJson = await doh.json();
                if (dohJson.Answer && dohJson.Answer.length) {
                    // first answer data usually contains the PTR hostname
                    host = dohJson.Answer[0].data.replace(/\.$/, '');
                }
            }
        } catch(e){
            // ignore DNS lookup errors, leave host = 'N/A'
        }

        // build table similar to PHP version
        let html = '<center><table class="suporteTable">';
        html += '<tr><th>IP</th><th>' + ip + '</th></tr>';
        html += '<tr><th>Host</th><th>' + host + '</th></tr>';
        html += '<tr><th>Tipo</th><th>' + tipoHtml + '</th></tr>';
        html += '</table></center>';

        document.getElementById('suporte-ip').innerHTML = html;
    } catch (err) {
        document.getElementById('suporte-ip').innerHTML = '<div style="color:red">Erro ao obter IP</div>';
    }

    // Downloads section (kept as before)
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