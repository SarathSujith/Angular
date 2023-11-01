class NumberToArray{
    userNumber:number=0;
    arrNumber:number[]=[];

    constructor(userNumber:number){
        this.userNumber=userNumber;
    }

    numberArrayMethod=()=>{
        let numberCopy = this.userNumber;
      while(numberCopy!==0){
       var reminder:number=numberCopy%10;
       this.arrNumber.push(reminder);
       numberCopy=Math.floor(numberCopy/10);
      }
      console.log(this.arrNumber.reverse());
    }
}
var userNum:number=Number(window.prompt("Enter  number:"));
var num=new NumberToArray(userNum);
num.numberArrayMethod();