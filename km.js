let getData = function(){
    let km = parseFloat(document.getElementById('form').value)
    console.log(km + 10)
    let r = km * 1000
    if(km>0){
        document.write('<h1>Tu resultado es: '+ r +' metros</h1>')
        let button = document.write("<button onclick='window.location.reload(true)'>Convertir otros datos</button>")
    }
    else{
        document.write('insert data')
    }
}

