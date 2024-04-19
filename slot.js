
const prompt = require('prompt-sync')(); 

const deposit =()=>{
while(true){
    const depositAmount = prompt('please enter amount:');
const numberDepositAmount = parseFloat(depositAmount);

if(isNaN(numberDepositAmount) || numberDepositAmount <= 0){
    console.log('invalid number try again')
}else {
    return numberDepositAmount
}
}
}


const depositAmount = deposit()
console.log(depositAmount)