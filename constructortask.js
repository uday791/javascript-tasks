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