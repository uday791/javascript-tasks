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