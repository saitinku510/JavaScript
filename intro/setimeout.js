function fnSetTimeOut(){

    setTimeout(function(){
        console.log("Called after 3 seconds")
    },5000)

    console.log("called after settimeout")
}

fnSetTimeOut()