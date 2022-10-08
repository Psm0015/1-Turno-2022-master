const formatan = new Intl.NumberFormat('en-GB')
const ajax = new XMLHttpRequest
ajax.open('GET','https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json')
ajax.send();

ajax.onload = function(){
    obj = JSON.parse(this.responseText);
    let txt = JSON.stringify(obj)
    console.log(obj)
    const divs=[]
    //console.log(obj.cand[0])
    for(var p = 0;p<(obj.cand.length);p++){
        chave=("candidato="+obj.cand[p].nm);
        prc=(obj.cand[p].pvap).replace(",",".");
        if (p%2 === 0){
            divs.push("<a onclick='pegaNm("+obj.cand[p].nm+")' href='estados.html?"+chave+"' class='c1'>"+obj.cand[p].nm+"<br>"+obj.cand[p].n+"<div class='cc'>"+obj.cand[p].cc+"</div><div class='barra'><div style='width: "+prc+"%;'>"+obj.cand[p].pvap+"%</div></div>"+"</a>")
        } else {
            divs.push("<a onclick='pegaNm("+obj.cand[p].nm+")' href='estados.html?"+chave+"' class='c2'>"+obj.cand[p].nm+"<br>"+obj.cand[p].n+"<div class='cc'>"+obj.cand[p].cc+"</div><div class='barra'><div style='width: "+prc+"%;'>"+obj.cand[p].pvap+"%</div></div>"+"</a>")
        }
    }
    /*for(var p = 0;p<(obj.cand.length);p++){
        document.getElementById("nome"+p).innerHTML=obj.cand[p].nm
    }
    for(var p = 0;p<(obj.cand.length);p++){
        document.getElementById("num"+p).innerHTML=obj.cand[p].n
    }
    for(var p = 0;p<(obj.cand.length);p++){
        document.getElementById(id="prc"+p).innerHTML=obj.cand[p].pvap+'%'
        const progresso = document.getElementById('br'+p)
        var prg = String(obj.cand[p].pvap)
        progresso.setAttribute("style","width: "+prg.replace(',','.')+ "%")
    }
    for(var p = 0;p<(obj.cand.length);p++){
        document.getElementById("vts"+p).innerHTML=" - "+formatan.format(obj.cand[p].vap)
    }*/
    document.querySelector('.corpo').innerHTML=divs.join(" ")
}
