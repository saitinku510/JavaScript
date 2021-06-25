function fnMap(){
    var info = [23,45,52,63,99,63]

    var newArray = info.map(function(ele,index){
        return ele + 10
    })

    console.log(newArray)
}
fnMap()