const { deepEqual } = require('assert');

const SECONDS_IN_MINUTE = 60
const MINUTES_IN_HOUR = 60
const HOURS_IN_DAY = 24

const timeCorrect = (timestring) => {
  // validations
  if(!timestring || !timestring.length) return timestring
  if(!timestring.includes(':')) return null

  const hms = timestring.split(':')
  if(hms.some(time => parseInt(time) != time)) return null

  let [h,m,s] = hms.map(time => parseInt(time))

  if(s >= SECONDS_IN_MINUTE){
    s %= SECONDS_IN_MINUTE
    m++
  }
  if(m >= MINUTES_IN_HOUR){
    m %= MINUTES_IN_HOUR
    h++
  }
  if(h >= HOURS_IN_DAY){
    h %= HOURS_IN_DAY
  }

  return [h,m,s]
    .map(time => time.toString().padStart(2, '0'))
    .join(':');
}

deepEqual(timeCorrect(null), null);
deepEqual(timeCorrect(""), "");
deepEqual(timeCorrect("001122"), null);
deepEqual(timeCorrect("00;11;22"), null);
deepEqual(timeCorrect("0a:1c:22"), null);
deepEqual(timeCorrect("09:10:01"), "09:10:01");
deepEqual(timeCorrect("11:70:10"), "12:10:10");
deepEqual(timeCorrect("19:99:09"), "20:39:09");
deepEqual(timeCorrect("19:99:99"), "20:40:39");
deepEqual(timeCorrect("24:01:01"), "00:01:01");
deepEqual(timeCorrect("52:01:01"), "04:01:01");

console.log('OK')

