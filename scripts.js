let salon = {
    name:"The Beauty Pet",
    phone:"619-12-15-48",
    address:{
        street:"Main",
        number:"1234"
    },
    workingHours:{
        open:"9:00",
        closes:"17:00"
    },

    pets:[]
};
let {name,phone,address:{street,number}}=salon;

document.getElementById('info').innerHTML=`<h2> ${name} is located in: ${street}, ${number}. <br> Phone number: ${phone} <br> It opens at ${salon.workingHours.open}, it closes at: ${salon.workingHours.closes}`;

function Pet(name,age,serviceType,ownerName, contactPhone){
    this.hunger=20;
    this.happiness=10;
    this.name=name;
    this.age=age;
    this.serviceType=serviceType;
    this.ownerName=ownerName;
    this.contactPhone=contactPhone;

    this.feed= function()
    {
        //this.hunger=this.hunger-10;
        this.hunger-=10;
        this.happiness+=10;
    }
    this.status=function(){
        console.log(this.name, "hunger level="+this.hunger,"Happy level="+this.happiness);
    }
    this.ownerContact =function()
    {
        console.log(" The owner is "+this.ownerName, "and to contac them, call "+this.contactPhone);
    }

}

var pet1 = new Pet("Janis",2,"Haircut","Sabrina","557899162");
var pet2 = new Pet("Ozzy",5,"Complete shave","Omar","554556587");
var pet3 = new Pet("Bruno",5,"Complete shave","Sonia","5545456587");

//pet1.feed();
//pet1.status();
//pet1.feed();
//pet1.status();

// push 

salon.pets.push(pet1);
salon.pets.push(pet2);
salon.pets.push(pet3);

pet2.ownerContact();

alert("We have "+salon.pets.length + " pets as custumers.");