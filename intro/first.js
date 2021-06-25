function fn(f1,f2){

    console.log("fn started executing")
    f1()
    f2()
}

// fn(function(){
//    console.log("funtion f1 is called")
//},function(){
//    console.log("funtion f2 is called")
//})

 function fnSum(v1,v2){
     var num1 = v1
     var num2 = v2
     
     return num1 + num2
 }

 var result = fnSum(5,9)
 console.log(result)

 function fnSum(v1,v2){
    var num1 = v1
    var num2 = v2
    var result = num1 + num2
    return result
}

var result = fnSum(5,9)
console.log(result)