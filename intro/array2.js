function fnArraysMethod(){

    // var data = ["sai",88,96,96,true,96,"Kid"]
    // data.forEach(function(ele,index){
    //     console.log(ele,index)
    // })

    // console.log(data.includes("sai"))
    // console.log(data.indexOf(88))
    // console.log(data.lastIndexOf(96))
    
    var index = data.findIndex(function(ele,index){
        return ele == 96
    })
    console.log(index)

}
//   fnArraysMethod()

function fnSplice(){
    var info = [23,63,66,85,99,78]

    // info.splice(2,2,100,200,25)
    // console.log(info)

    info.slice(1,2)
    console.log(info)
}

fnSplice()
7483792649
