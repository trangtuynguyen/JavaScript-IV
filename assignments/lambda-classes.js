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

class Instructor extends Person{
    constructor(iAttr){
        super(iAttr);
        this.specialty = iAttr.specialty;
        this.favLanguage = iAttr.favLanguage;
        this.catchPhrase = iAttr.catchPhrase;
    }

    demo(subject){
        console.log(`Today we are learning abour ${subject}`);
    }

    grade(student, subject){
        console.log(`${studen.name} recieves a perfect score on ${subject}`);
    }
}

class studen extends Person{
    constructor(sAttr){
        super(sAttr);
        this.previousBackground = sAttr.previousBackground;
        this.className = sAttr.className;
        this.favSubjects = sAttr.favSubjects;
    }

    listsSubjects(){
        for(i=0; i<this.favSubjects.length; i++){
            console.log(this.favSubjects[i]);
        }
    }

    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject){
        console.log(`${this.name} has begin Sprint challenge for ${subject}`);
    }


}