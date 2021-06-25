function fn(){
    
    var personInfo = {
    name:"Sai",
    email:"sai@gmail.com",
    No:"9494548520"
    }
 console.log(personInfo)
 //access the property inside the object
 //console.log(personInfo.name)
 //console.log(personInfo.email)
 //Inserting the property in the object
    personInfo.city="Karimnagar"
    console.log(personInfo)
 //Update The Property
    personInfo.city="Hyd"
    console.log(personInfo)

    personInfo.age="24"
    personInfo.email="sagi@gmail.com"
    console.log(personInfo)

    //Delete the property
    delete personInfo.city
    console.log(personInfo)
}
fn()
