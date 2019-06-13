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
        console.log(`${student.name} recieves a perfect score on ${subject}`);
    }
}

class Student extends Person{
    constructor(sAttr){
        super(sAttr);
        this.previousBackground = sAttr.previousBackground;
        this.className = sAttr.className;
        this.favSubjects = sAttr.favSubjects;
    }

    listsSubjects(){
        for(var i=0; i<this.favSubjects.length; i++){
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

class ProjectManager extends Instructor{
    constructor(pMAttr){
        super(pMAttr);
        this.gradClassName = pMAttr.gradClassName;
        this.favInstructor = pMAttr.favInstructor;
    }

    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!`)
    }

    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}
        `)
    }
}

const trang = new Student({
    name: "Trang",
    location: "NYC",
    age: 18,
    previousBackground: "Student at Columbia",
    className: "Web21",
    favSubjects: ['Html', 'CSS', 'JavaScript']
});

const lisa= new ProjectManager({
    name: "Lisa",
    location: "Texas",
    age: 30,
    previousBackground: "Military",
    specialty: "Web development",
    favLanguage: "English",
    catchPhrase: "Howdy y'all!",
    gradClassName: "Web10",
    favInstructor: "Josh"

});


trang.listsSubjects();
trang.speak();
trang.PRAssignment("Math");
trang.sprintChallenge("CSS");

lisa.speak();
lisa.favLanguage;
lisa.demo("math");
lisa.grade(trang, "math");
lisa.standUp("Web_21");
lisa.debugsCode(trang, "math");