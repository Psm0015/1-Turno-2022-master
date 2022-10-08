const candidato = new URLSearchParams(window.location.search).get("candidato");//Pega parametro da URL
ufs=['ac','al','ap','am','ba','ce','df','es','zz','go','ma','mt','ms','mg','pr','pb','pa','pe','pi','rj','rn','rs','ro','rr','sc','se','sp','to','br']
estados=['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Exterior','Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Paraná','Paraíba','Pará','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraioma','Santa Catarina','Sergipe','São Paulo','Tocantins','Total']
function fzget(uf){
    //https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/'+uf+'/'+uf+'-c0001-e000544-r.json'
    let request = new XMLHttpRequest()
    request.open("GET","https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/"+uf+"/"+uf+"-c0001-e000544-r.json",false)
    request.send()
    return JSON.parse(request.responseText)
}
divs = []
divs.push('<tr id="c2"><th id="est1">Estado</th><th id="vts1">Votos</th><th id="prc1">Porcentagem</th></tr>')
for (c=0;c<ufs.length;c++){
    /*if(fzget(ufs[c]).cand[c].nm===candidato){
        divs.push('<div>'+estados[c]+fzget(ufs[c]).cand[0].nm+'</div>')
    }*/
    for(i=0;i<(fzget(ufs[c]).cand).length;i++){
        //console.log(fzget(ufs[c]).cand[i].nm)
        if ((fzget(ufs[c]).cand[i].nm)===candidato){
            //fzget(ufs[c]).cand[i].vap
            let prc=((parseFloat(fzget(ufs[c]).cand[i].vap)*100)/parseFloat(fzget('br').cand[i].vap))
            console.log(prc)
            //console.log(fzget(ufs[c]).cand[i])
            //divs.push("< id='votos'>"+fzget(ufs[c]).cand[i].vap+"votos"+"</div>"+"<div id='estados'>"+estados[c]+"</div>"+"<div id='prc'>"+prc.toFixed(2)+"%"+"</div>"+"<br>")
            if ((c%2)==0){
                divs.push("<tr id='c1'><td id='est'>"+estados[c]+"</td><td id='vts'>"+fzget(ufs[c]).cand[i].vap+" votos"+"</td><td id='prc'>"+prc.toFixed(2)+"%"+"</td></tr>")
            } else{
                divs.push("<tr id='c2'><td id='est'>"+estados[c]+"</td><td id='vts'>"+fzget(ufs[c]).cand[i].vap+" votos"+"</td><td id='prc'>"+prc.toFixed(2)+"%"+"</td></tr>")
            }
            //fzget(ufs[c]).cand[i].vap+"votos"
        }
    }
}
document.querySelector(".corpo").innerHTML=divs.join(" ")
document.getElementById('subtitulo').innerHTML=candidato