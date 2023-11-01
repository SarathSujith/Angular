"use strict";
class NumberToArray {
    constructor(userNumber) {
        this.userNumber = 0;
        this.arrNumber = [];
        this.numberArrayMethod = () => {
            let numberCopy = this.userNumber;
            while (numberCopy !== 0) {
                var reminder = numberCopy % 10;
                this.arrNumber.push(reminder);
                numberCopy = Math.floor(numberCopy / 10);
            }
            console.log(this.arrNumber.reverse());
        };
        this.userNumber = userNumber;
    }
}
var userNum = Number(window.prompt("Enter  number:"));
var num = new NumberToArray(userNum);
num.numberArrayMethod();
