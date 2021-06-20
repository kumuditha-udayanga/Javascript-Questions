function person (userName, userAge, userHeight, userLocation) {
    this.name = userName,
    this.age = userAge,
    this.height = userHeight,
    this.live = userLocation
};

const newPerson = new person("Kumuditha", 19, "174cm", "Nugawela");
const person01 = new person("RIlauma", 20, "180cm", "Swisterland")


for (let key in newPerson){
    console.log(key, newPerson[key]);
}
console.log(person01);
