//.........................EX-1...................
class Bank {
    static bank_location = "india,ap,vijayawada"

    static bank_name = "sbi"
    constructor(ac_num, ac_name, ac_bla) {
        this.acnum = ac_num;
        this.acname = ac_name;
        this.balance = ac_bla;
    }
    display() {

        console.log("bank_location", Bank.bank_location);
        console.log("bank name", Bank.bank_name);

        console.log("account no:", this.acnum);
        console.log("account holder name:", this.acname);
        console.log("account balance:", this.balance);

    }
}
Bank.bank_name = "ICC"
let u1 = new Bank(101, "hero", 786543567);
console.log("..............account holder 1..............");


u1.display();


let u2 = new Bank(102, "hero2", 6543567);
console.log("..............account holder 2..............");


u2.display();



let u3 = new Bank(103, "hero3", 43567);
console.log("..............account holder 3..............");


u3.display();


let u4 = new Bank(104, "hero4", 63567);
console.log("..............account holder 4..............");


u4.display();


let u5 = new Bank(105, "hero3", 543567);
console.log("..............account holder 5..............");


u5.display();

/////////////////////////////////////output/////////////////////////////////

// ..............account holder 1..............
// bank_location india,ap,vijayawada
// bank name ICC
// account no: 101
// account holder name: hero
// account balance: 786543567
// ..............account holder 2..............
// bank_location india,ap,vijayawada
// bank name ICC
// account no: 102
// account holder name: hero2
// account balance: 6543567
// ..............account holder 3..............
// bank_location india,ap,vijayawada
// bank name ICC
// account no: 103
// account holder name: hero3
// account balance: 43567
// ..............account holder 4..............
// bank_location india,ap,vijayawada
// bank name ICC
// account no: 104
// account holder name: hero4
// account balance: 63567
// ..............account holder 5..............
// bank_location india,ap,vijayawada
// bank name ICC
// account no: 105
// account holder name: hero3
// account balance: 543567



//.........................EX-2...................

// class Institute {
//     static Inst_location = "Hyderabad"

//     static Inst_name = "INNOMATICS"
//     set_data(name, batch, course) {
//         this.name = name;
//         this.batch = batch;
//         this.course = course;
//     }
//     display() {
//         console.log("institute location", Institute.Inst_location);
//         console.log("institute name", Institute.Inst_name);

//         console.log("name of the student:", this.name);
//         console.log("batch of institute:", this.batch);
//         console.log("course of the institute:", this.course);

//     }
// }

// let u1 = new Institute();
// console.log("..............Person 1..............");

// u1.set_data("ravi", 60, "python");
// u1.display();


// let u2 = new Institute();
// console.log("..............person 2..............");

// u2.set_data("raju", 61, "java");
// u2.display();



// let u3 = new Institute();
// console.log("..............person 3..............");

// u3.set_data("mahi", 60, "Dot net");
// u3.display();

// let u4 = new Institute();
// console.log("..............person 2..............");

// u4.set_data("balu", 63, "python");
// u4.display();
// let u5 = new Institute();
// console.log("..............person 2..............");

// u5.set_data("ramesh", 62, "java");
// u5.display();

/////////////////////////////////////output/////////////////////////////////
// ..............Person 1..............
// institute location Hyderabad
// institute name INNOMATICS
// name of the student: ravi
// batch of institute: 60
// course of the institute: python
// ..............person 2..............
// institute location Hyderabad
// institute name INNOMATICS
// name of the student: raju
// batch of institute: 61
// course of the institute: java
// ..............person 3..............
// institute location Hyderabad
// institute name INNOMATICS
// name of the student: mahi
// batch of institute: 60
// course of the institute: Dot net
// ..............person 2..............
// institute location Hyderabad
// institute name INNOMATICS
// name of the student: balu
// batch of institute: 63
// course of the institute: python
// ..............person 2..............
// institute location Hyderabad
// institute name INNOMATICS
// name of the student: ramesh
// batch of institute: 62
// course of the institute: java
//.........................EX-3...................

// class Car {
//     static Car_name = "BMW"
//     static Car_company = "Germany"
//     set_data(cr_name, cr_color, cr_model, cr_price) {
//         this.carname = cr_name;
//         this.carcolor = cr_color;
//         this.carmodel = cr_model;
//         this.carprice = cr_price
//     }
//     display() {
//         console.log("car name", Car.Car_name);
//         console.log("car company:", Car.Car_company);

//         console.log("name of the car:", this.carname);
//         console.log("color of the car:", this.carcolor);
//         console.log("car model year:", this.carmodel);
//         console.log("car price:", this.carprice);

//     }
// }
// let u1 = new Car();
// console.log("..............model 1..............");

// u1.set_data("m2 coupe", "sky blue", 2020, 100000000);
// u1.display();
// let u2 = new Car();
// console.log("..............model 2..............");

// u2.set_data("m3401 coupe", "black", 2021, 7800000);
// u2.display();
// let u3 = new Car();
// console.log("..............model 3..............");

// u3.set_data("x3 m401", "white", 2023, 90000000);
// u3.display();
// let u4 = new Car();
// console.log("..............model 4..............");

// u4.set_data("m8 comp", "green", 2024, 250000000);
// u4.display();
// let u5 = new Car();
// console.log("..............model 5..............");

// u5.set_data("i5 m50", "red", 2020, 121000000);
// u5.display();



//////////////////////////////output/////////////////////////////////////////////////////////////


// ..............model 1..............
// car name BMW
// car company: Germany
// name of the car: m2 coupe
// color of the car: sky blue
// car model year: 2020
// car price: 100000000
// ..............model 2..............
// car name BMW
// car company: Germany
// name of the car: m3401 coupe
// color of the car: black
// car model year: 2021
// car price: 7800000
// ..............model 3..............
// car name BMW
// car company: Germany
// name of the car: x3 m401
// color of the car: white
// car model year: 2023
// car price: 90000000
// ..............model 4..............
// car name BMW
// car company: Germany
// name of the car: m8 comp
// color of the car: green
// car model year: 2024
// car price: 250000000
// ..............model 5..............
// car name BMW
// car company: Germany
// name of the car: i5 m50
// color of the car: red
// car model year: 2020
// car price: 121000000