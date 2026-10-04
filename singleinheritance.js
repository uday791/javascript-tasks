// class Product {
//     constructor(name, price) {
//         this.name = name
//         this.price = price
//     }
//     display() {
//         console.log("product name", this.name);
//         console.log("product price", this.price);

//     }
// }


// class Laptop extends Product {
//     constructor(name, price, ram) {
//         // this.name = name
//         // this.price = price
//         super(name, price) //parent class constructor
//         this.ram = ram
//     }
//     displaylap() {
//         // console.log("product name", this.name);
//         // console.log("product price", this.price);
//         super.display() //parent class method
//         console.log("product ram", this.ram);

//     }

// }
// let l = new Laptop("macbook", 80000, "12gb")

// l.displaylap()



//....................................,,,,..........................///..........................................................................






// class Product {
//     constructor(name, price) {
//         this.name = name
//         this.price = price
//     }
//     display() {
//         console.log("product name", this.name);
//         console.log("product price", this.price);

//     }
// }
// class Laptop extends Product {
//     constructor(name, price, ram) {

//         super(name, price) 
//         this.ram = ram
//     }
//     displaylap() {

//         super.display()
//         console.log("product ram", this.ram);

//     }

// }
// let l = new Laptop("macbook", 80000, "12gb")

// l.displaylap()


// class Bick {
//     static bick_name = "Royel enfield"
//     static bick_manufacturing_country = "india"
//     constructor(bick_model, bick_color, bick_store_add, bick_mileage, bick_manufacturing_year, bick_price) {
//         this.bick_model = bick_model
//         this.bick_color = bick_color
//         this.bick_store_add = bick_store_add
//         this.bick_mileage = bick_mileage
//         this.bick_manufacturing_year = bick_manufacturing_year
//         this.bick_price = bick_price
//     }
//     displaybick() {
//         console.log("Bick name :", Bick.bick_name);
//         console.log("Bick manufacturing country name :", Bick.bick_manufacturing_country);

//         console.log("Bick model :", this.bick_model);
//         console.log("Bick color :", this.bick_color);
//         console.log("Bick store addres :", this.bick_store_add);
//         console.log("Bick 1lt per mileage :", this.bick_mileage);
//         console.log("Bick manufacturing year :", this.bick_manufacturing_year);


//     }
// }
// class Royel extends Bick {
//     constructor(bick_model, bick_color, bick_store_add, bick_mileage, bick_manufacturing_year, bick_price) {
//         super(bick_model, bick_color, bick_store_add, bick_mileage, bick_manufacturing_year)
//         this.bick_price = bick_price
//     }
//     display() {
//         super.displaybick()
//         console.log("Bick price :", this.bick_price);

//     }


// }
// let a = new Royel("classic350", "black", "vijayawada", 30, 2009, 300000)
// a.display()



///.............................................///...................................



// class Mobile {
//     static mobil_name = "IQ"
//     static mobil_manufacturing_country = "China"
//     constructor(mob_model, mob_color, mob_ram, mob_battery, mob_price) {
//         this.mob_model = mob_model
//         this.mob_color = mob_color
//         this.mob_ram = mob_ram

//         this.mob_battery = mob_battery
//         this.mob_price = mob_price
//     }

// }

// class Model extends Mobile {
//     constructor(mob_model, mob_color, mob_ram, mob_battery, mob_price) {
//         super(mob_model, mob_color, mob_ram)
//         this.mob_battery = mob_battery
//         this.mob_price = mob_price
//     }
//     display() {
//         console.log("mobile name :", Mobile.mobil_name);
//         console.log("mobile manufacturing country name :", Mobile.mobil_manufacturing_country);

//         console.log("mobile model :", this.mob_model);
//         console.log("mobile color :", this.mob_color);
//         console.log("mobile ram:", this.mob_ram);

//         console.log("mobile battery :", this.mob_battery);
//         console.log("mobile price :", this.mob_price);

//     }

// }
// let s = new Model("iqz9spro", "white", "8gb", "6000mh", 31000)
// s.display()



//.................//.......................DAY-1/10/26...................//...............................//.............//



//WITH CLASS OUTSIDE METHOD
// class Test {
//     name = "hero"
// }
// class Test2 extends Test {

// }
// let t = new Test2()
// console.log(t.name);


////...........using object...............

// class Test {
//     name = "hero"
// }
// class Test2 extends Test {

// }
// let t2 = new Test2()
// console.log(t2.name);

// let t1 = new Test()
// t1.age = 21
// console.log(t1.age);


/////////////////////////////////.................USING METHOD.....................//////////////////////////////////////////////

// class Test {
//     m1() {
//         this.name = "hero"
//     }
// }
// class Test2 extends Test {

// }
// let t = new Test2()
// t.m1()
// console.log(t.name);



// class Test {
//     constructor() {
//             this.name = "name"
//         }
//         // display() {
//         //     console.log(this.name);
//         // }
// }
// class Test2 extends Test {

// }
// let t = new Test2("hero")
// console.log(t.name);





//miltilevel inheritance..................................


// class A {
//     m1() {
//         console.log("m1 from A");

//     }

// }
// class B extends A {
//     m2() {
//         console.log("m2 from B");

//     }

// }
// class C extends B {
//     m3() {
//         console.log("m3 from C");

//     }

// }
// let c = new C;
// c.m3()
// c.m2()
// c.m1()


// class Mobile {
//     call() {
//         console.log("i call the mobile");

//     }
//     text() {
//         console.log("i text the mobile");

//     }
// }
// class Smartphone extends Mobile {
//     camera() {
//         console.log("camera is work in smart phone");

//     }
// }
// class Latestphone extends Smartphone {
//     intrnet() {
//         console.log("work on the internet");

//     }
// }
// let t = new Latestphone()
// t.intrnet()
// t.camera()
// t.text()
// t.call()

// class Bankacc {
//     constructor(name, accnum) {
//         this.name = name
//         this.accnum = accnum
//     }
//     display() {
//         console.log("holder name", this.name);
//         console.log("holder number", this.accnum);


//     }
// }
// class Bankblc extends Bankacc {
//     constructor(name, accnum, balance) {
//         super(name, accnum)
//         this.balance = balance
//     }
//     balance() {
//         super.display()
//         console.log("acc balance", this.balance);

//     }
// }
// class Bankname extends Bankblc {
//     constructor(name, accnum, balance, bankname) {
//         super(name, accnum, balance)
//         this.bankname = bankname
//     }
//     accbalance() {
//         super.balance()
//         console.log("bank name", this.bankname);


//     }
// }
// let t = new Bankname("hero1", 1001, 3456, "SBI")
// t.accbalance();






// class A {
//     m1() {
//         console.log("m1 from A");

//     }

// }
// class B extends A {
//     m2() {
//         console.log("m2 from child");

//     }

// }
// class C extends A {
//     m3() {
//         console.log("m3 from child");

//     }

// }
// let c = new C;
// c.m1()
// c.m3()
// let a = new B;
// a.m1()
// a.m2()





class Mobile {
    m1() {
        console.log(" different mobiles models");

    }

}
class Iq extends Mobile {
    m2() {
        console.log("iq is a model model");

    }

}
class Vivo extends Mobile {
    m3() {
        console.log("iq is a model model");

    }

}
let c = new Vivo;
c.m1()
c.m3()
let a = new Iq;
a.m1()
a.m2()