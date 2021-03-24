const getPerson = (person) =>{
    // if(person?.name!==null)
    
        console.log(`this person called ${person.name}`);
    
    // if(person?.gender!==null)
    
        console.log(`this person is a ${person.gender}`)
   if(person?.hobby)
    person.hobby.map((hobby)=>(console.log(hobby)))
    
}

const person1 = {
    name:'gay',
    gender:'dude',
    hobby:['hiking','fighting','fucking']
}

getPerson(person1);