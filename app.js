let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
var age=34;
if(age>18 && !registeredEarly){
  raceNumber +=1000;
}
if(age>18 && !registeredEarly){
  console.log(`The race is at 9:30am and your race number is : ${raceNumber}.`);
}else if (age>18 && registeredEarly){
  console.log(`The race is at 11:00am and your race number is : ${raceNumber}.`);
}else if (age<18){
  console.log(`The race is at 12:30pm and your race number is : ${raceNumber}`);
}else{
  console.log('See the registration desk');
}
