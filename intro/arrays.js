// function fnArray(){
//     var info = [10,true,21,"sai",583]
//     // console.log(info.length)
//     // console.log(info)
//     info.push("Sathyam")
//     info.pop()
//     info.unshift("Bunny")
//     info.shift()
//     console.log(info)

// }
// fnArray()

function filterArray(){
    var info = [10,46,6,63,9856,96,74,63,1002,500]
        var filterdInfo = info.filter(function(e,i){
            // return e > 50
            return e > 20 && e < 1000
        })
        return filterdInfo
}

console.log(filterArray())

// some
// every
// reduce