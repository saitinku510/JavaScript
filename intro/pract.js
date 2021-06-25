function fn(){
    var personInf = {
        name:"Tinku",
        email:"tinku@SpeechGrammarList.com",
        fn1:function(){
            console.log("I am function inside an object")
        }
        contactDetails : {
            mobilel:949485296,
            landline:235988963,
        },
        address : {
            Hno:"305",
            city:"Bangalore",
            state:"Karnataka",
        }
    }

    console.log(personInf)

    console.log(personInf.name)
    console.log(personInf.email)
    console.log(personInf.contactDetails.landline)
    console.log(personInf.address.city)
    console.log(personInf.address.state)

    personInf.address.pin="504307"
    console.log(personInf)

    personInf.address.city="Hyderabad"
    console.log(personInf)

    delete personInf.address.Hno
    console.log(personInf)

    personInf.fn1()
}

fn()

// access all the properties except hno mobile
//insert new property under state as pin
// update city
// delete hno