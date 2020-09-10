function Contar() {
    let txt1 = document.getElementById('txt1')
    let txt2 = document.getElementById('txt2')
    let txt3 = document.getElementById('txt3')
    let res = document.getElementById('res')

    if (txt1.value.length == 0 || txt2.value.length == 0 || txt3.value.length == 0 || txt1.value.length == txt2.value.length){

        res.innerHTML = `impossível contar!`

    } else {
        res.innerHTML = `... <br>`
        let n1 = Number(txt1.value)
        let p = Number(txt3.value)
        let n2 = Number(txt2.value)

        if (n2 > n1) {
            for ( let c = n1; c <= n2 ; c += p ) {
                res.innerHTML += ` ${c} |`
            }
        } else if (n1 > n2) {
            for (let c = n1; c >= n2; c -= p ) {
                res.innerHTML += ` ${c} |`
            }
        }    
    }    
}
