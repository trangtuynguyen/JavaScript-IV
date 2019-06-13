// CODE here for your Lambda Classes

class Person{
    constructor(pAttr){
        this.name = pAttr.name;
        this.age = pAttr.age;
        this.location = pAttr.location;
    }

    speak(){
        console.log(`Hello my name is ${this.name} and I am from ${this.location}`);
    }
}