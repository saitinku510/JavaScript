var obj = {
    c : 100
}

function myFunc(x,y){
    
    var a = x
    var b = y

    return a + b + this.c
}

  // var myNewFunc = myFunc.bind(obj,15,25)
  
  //console.log(myNewFunc())
    console.log(myFunc.bind(obj,56,64)())