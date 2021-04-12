let getData = function(){
    let km = parseInt(document.getElementById('form').value)
    console.log(km + 10)
    let r = km * 100
    if(km>0){
        document.write('Tu resultado es: '+ r +" milimetros")
    }
    else{
        document.write('insert data')
    }
}