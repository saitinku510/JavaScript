var obj = {
    c : 100
}

function myFunc(x,y){
    
    var a = x
    var b = y

    return a + b + this.c
}

console.log(myFunc.apply(obj,[20,50]))
