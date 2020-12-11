const template = document.createElement("template");
template.innerHTML = `
<link href="https://fonts.googleapis.com/css2?family=Changa:wght@300;400;600;800&display=swap" rel="stylesheet">
<style>
   :host * {
    font-family: 'Changa', sans-serif;

   }

    :host{
        --light: #b0ade0;
        --lighter: #c3c1e6ff;
        --main: #36308aff;
        --dark: #686778ff;
        --darker: #2e2c4aff;
        --gr1:linear-gradient(90deg, var(--darker), var(--main));
        --gr2:linear-gradient(25deg, var(--light), var(--main));
        --gr3:linear-gradient(90deg, var(--light), var(--lighter));
        --gr4:linear-gradient(10deg, var(--light), var(--lighter));


        display:block;
        font-size:.9em;
        border-radius:5px;
        color:var(--main);
        background:var(--lighter);
        padding:1em;
        background:var(--gr2);
    } 
    
    .puanDurumuHTML{
        width:100%;
    }

    .puanDurumuHTML.loading{
       
    }

    table{
        border-collapse: collapse;
        width:100%;
        line-height:1.2;

    }

    caption{
        background:var(--darker);
        color:var(--lighter);
    }

    abbr{
        text-decoration:none;
    }

    table thead{
        background:var(--main);
        color:var(--lighter);
    }

    table tbody tr:hover{
        background:var(--main);
        color:var(--lighter);
    }

    table tr td{
        margin:1em;
        font-weight:600;
    }
    table tbody tr{
        background:var(--gr4);
    }

    table tr:nth-child(2n){
        color:var(--darker);
        background:var(--lighter);

    }

    table tr td,table tr th{
        text-align: center;
        cursor:pointer;
    }

    table tr td:nth-child(2),table tr th:nth-child(2){
        text-align: left;
    }

    table th{
        font-size:1.1em;
        padding:10px 5px;
    }

    table td{
        padding:5px;

    }

/*LOADING */

.loading table tr td
 {
	width: 100%;
	color: var(--lighter);
	position: relative;
	overflow: hidden;
}

.loading table tr td::before
 {
	content: "";
	width: 75%;
	height: 50%;
	position: absolute;
	left: 0;
	top: 25%;
	background: linear-gradient(
		to right,
		var(--light) 0%,
		var(--main) 100%
	);
	animation: placeholder 1s ease-in both infinite;
}

@keyframes placeholder {
	0% {
		left: -100%;
	}
	100% {
		left: 100%;
	}
}

			
    
    
</style>
<h5 class = "title"> </h5>

<div class="puanDurumuHTML">
    
</div>

</div>
`

class PuanDurumu extends HTMLElement {
    constructor() {
        super();
        document.head.innerHTML += `<link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Changa:wght@300;400;600;800&display=swap" rel="stylesheet">`
        this.attachShadow({mode:"open"})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
        //this.tableHTML = this.getAttribute("data-table-html") || defaultTableHTML;
        //this.shadowRoot.querySelector("h5.title").innerText = this.getAttribute("lig");
        this.shadowRoot.querySelector(".puanDurumuHTML").innerHTML = defaultTableHTML;
        this.setTableHTML = this.setTableHTML.bind(this);

    }

    connectedCallback() {
        //this.tableHTML = this.getAttribute("data-table-html") || defaultTableHTML;
        this.shadowRoot.querySelector(".puanDurumuHTML").classList.add("loading");
        this.fetchTableHTML(this.getAttribute("lig"));

        //this.innerHTML = this.tableHTML;

        //this.shadowRoot.querySelector(".puanDurumuHTML").innerHTML += this.getAttribute("data-table-html");
    }

    fetchTableHTML = function(lig){
        fetch(`https://raw.githubusercontent.com/kod8/haber8-scraper/main/data/spor/html/puan/${lig}.html`)
        .then(function(res){ 
            return res.text();
        }).then(this.setTableHTML);
    }

    setTableHTML = function(html){
        this.shadowRoot.querySelector(".puanDurumuHTML").innerHTML = html;
        this.shadowRoot.querySelector(".puanDurumuHTML").classList.remove("loading");
    }
}

var defaultTableHTML = 
`
<table class="liste">
<caption>
   <h2>- Puan Durumu</h2>
</caption>
<thead>
   <tr>
      <th><abbr title="Sıra">S</abbr></th>
      <th>Takım</th>
      <th><abbr title="Oynadığı Maç">O</abbr></th>
      <th><abbr title="Galibiyet">G</abbr></th>
      <th><abbr title="Beraberlik">B</abbr></th>
      <th><abbr title="Mağlubiyet">M</abbr></th>
      <th><abbr title="Attığı Gol">A</abbr></th>
      <th><abbr title="Yediği Gol">Y</abbr></th>
      <th><abbr title="Averaj">Av</abbr></th>
      <th><abbr title="Puan">P</abbr></th>
   </tr>
</thead>
<tbody>
   <tr>
      <td class="se">-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
   </tr>
   <tr>
      <td class="se">-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
   </tr>
   <tr>
      <td class="ae">-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
   </tr>
   <tr>
      <td class="ae">-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
   </tr>
   <tr>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
   </tr>
   <tr>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
   </tr>
   <tr>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
   </tr>
   <tr>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
   </tr>
   <tr>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
   </tr>
   <tr>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
   </tr>
   <tr>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
   </tr>
   <tr>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
   </tr>
   <tr>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
   </tr>
   <tr>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
   </tr>
   <tr>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
   </tr>
   <tr>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
   </tr>
   <tr>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
   </tr>
   <tr>
      <td class="kd">-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
   </tr>
   <tr>
      <td class="kd">-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
   </tr>
   <tr>
      <td class="kd">-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
   </tr>
   <tr>
      <td class="kd">-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
   </tr>
</tbody>
</table>
    
`



window.customElements.define("puan-durumu", PuanDurumu)