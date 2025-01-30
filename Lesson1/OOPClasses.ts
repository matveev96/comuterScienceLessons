class Person {
    private sex: string;
    private age: number;
    private name: string;

    constructor(sex: string, age: number, name: string) {
        this.age = age;
        this.sex = sex;
        this.name = name;
    }

    public get firstName() {
        return `My name is ${this.name}`
    }

    public get personSex() {
        return `My sex is ${this.sex}`
    }

    public get personAge() {
        return `My age is ${this.age}`
    }

    set setPersonSex(value: string) {
        this.sex = value
    }
    set setFirstName(value: string) {
        this.name = value
    }
    set setPersonAge(value: number) {
        this.age = value
    }
    getAllPersonInfo() {
        return `My name is ${this.name}. I am ${this.age} years old. My sex is ${this.sex}`
    }

    greeting() {
        return `Hello, I'm Person class. ${this.getAllPersonInfo()}`
    }
}

console.log("")

const person = new Person('Man', 28, 'Alex')
person.setPersonSex = 'Female'
// console.log(person.getAllPersonInfo())


class Employee extends Person {
    private skill: string;
    private experience: string
    constructor(sex: string, age: number, name: string, skill: string, experience: string) {
        super(sex,age,name);
        this.skill = skill
        this.experience = experience
    }

    public get personSkill() {
        return `I work here like a ${this.skill}`
    }

    set setPersonSkill(value: string) {
        this.skill = value
    }
    public get personExp() {
        return `My experience ${this.experience} years`
    }

    set setPersonExp(value: string) {
        this.experience = value
    }

    getEmployeeInfo() {
        return `I work here like a ${this.skill}. My experience ${this.experience} years`
    }

    greeting() {
        return `Hello, I'm Employee class. ${this.getEmployeeInfo()}`
    }

}

const employee = new Employee('Man', 28, 'Alex', 'middle', 'four')


employee.setPersonExp = 'Eight'
employee.setPersonSkill = 'Senior'

const arr = [employee, person]

function greetingFunc(arr: Person[]) {
    for (let i=0; i < arr.length; i++) {
        const greet = arr[i].greeting()
        console.log(greet)
    }
}
// greetingFunc(arr)


class Engine {
    private typeEngine: string

    constructor(type: string) {
        this.typeEngine = type
    }

    startEngine() {
        console.log(`Start engine ${this.typeEngine}`)
    }
}

//Композиция
class Car {
    private engine: Engine;
    private model: string

    constructor(model: string) {
        this.engine = new Engine('V8');
        this.model = model;
    }

    carStart() {
        console.log(`Car ${this.model}`)
        this.engine.startEngine()
    }
}

const car = new Car('JavaScript')
// car.carStart()

//Агрегация

class NewCar {
    private engine: Engine;
    private model: string

    constructor(model: string, engine: Engine) {
        this.engine = engine;
        this.model = model;
    }

    carStart() {
        console.log(`Car ${this.model}`)
        this.engine.startEngine()
    }
}

const engine = new Engine('V10')

const newCar = new NewCar('TypeScript',engine)
// newCar.carStart()


//Singleton

class Database {
    public url;
    private static data: Database;

    constructor() {
        if(Database.data) {
            return Database.data
        }
        this.url = Math.random()
        Database.data = this
    }
}
const db = new Database()
const newdb = new Database()
console.log(db.url)
console.log(newdb.url)

