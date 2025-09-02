class Student {
  constructor(name, id, subject, marks) {
    this.name = name;
    this.id = id;
    this.subject = subject;
    this.marks = marks;
  }
  getInfo() {
    console.log(`Name: ${this.name}, ID: ${(this, this.id)},
          Subject: ${this.subject}, Mark: ${this.marks}`);
  }
}
// Four pillar of OOP: Abstraction, Encapsulation, Inheritance, Polymorphism

// Inheritance (উত্তরাধিকার সূত্রে পাওয়া)

class BestStudent extends Student {
  constructor(name, id,subject, marks, achievement) {
    super(name, id,subject, marks);
    this.achievement = achievement;
  }

  showAchievement() {
    console.log(`${this.name}'s achievement is ${this.achievement}`);
  }
}

const st1= new Student("Sami",201,"math",76)
const st2= new Student("Jami",250,"science",68)
const st3= new Student("Rani",204,"english",90)
const bestStd = new BestStudent("Rani",204,"english",90 ,"Bee");

// console.log(st1);
// console.log(st2);
// console.log(st3);


bestStd.getInfo();
bestStd.showAchievement();