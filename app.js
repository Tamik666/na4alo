const payrate = 80*5;
const money = `PayRate=${payrate/5}, salary per day=${payrate}`;
console.log(money);
const workhours = 40;
const workdays = workhours/5
const workdaysinweek = 5;
const workhoursinday = 5;
const holydays = 2;
const dedline = 11 - holydays;
const request = `i need to request for this job-${payrate*workdays} da11Arav`;
console.log(request);
const daysable = `${dedline} work days and ${holydays} holydays, 5 work hours per day or ${dedline/5} work weeks`;
console.log(daysable);
const able1 = workdays < dedline;
const able2 = (able1 > 0 ? 'yes sir' : 'no sir');
const willibeable = `will i be able? ${able2}`;
console.log(willibeable);
const busyweeks = workdays/5;
const needtowork = `to able i need to work ${workdays} days, or ${busyweeks} weeks, or ${workdaysinweek*workhoursinday} hours in week during ${busyweeks} weeks or ${workhours} hours in total `;

const cash = 50;

if (cash >= 50){
    console.log(`delaigo bi9agyn`)
}   else if (cash>=20){
    console.log(`mozhesh moy khuy otsosat' za kopeyki eti`)
}
    else{
    console.log(`idi da nahuy rodnoi`)
}
