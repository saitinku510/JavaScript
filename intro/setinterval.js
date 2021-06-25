function fnSetInterval() {
    var myInterval;
       myInterval = setInterval(function() {

        console.log("Called for every 3 seconds")

    },2000)

    setTimeout(function(){

        clearInterval(myInterval)
    },10000)

}

fnSetInterval()



// create a html 2 buttons, start time and stop time
// start printing in a time interval
// stop then stop the interval

// card using CSS
// current date and current time
// using date object in JS