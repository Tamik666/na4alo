const payrate = 80*5;
const money = `payrate=${payrate/5}, salary per day=${payrate}`;
console.log(money);
const dayon = 40/5;
const dedline = (11-2);
const request = `i need to request for this job-${payrate*dayon}`;
console.log(request);
const daysable = `${dedline} days on, 5 hrs per day, weeks ${dedline/5}`;
console.log(daysable);
const willibeable = `will i be able? ${dayon < dedline}`;
console.log(willibeable);
const needtowork = `i need to work ${dayon} days, or ${dayon/5} weeks, or ${dayon*5} hrs per week during ${dayon/5} weeks or ${dayon*5} hours`
console.log(needtowork);