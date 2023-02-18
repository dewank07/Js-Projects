const daysEl    =document.getElementById('days')
const hoursEl   =document.getElementById('hours')
const minutesEl =document.getElementById('minutes')
const secEl     =document.getElementById('seconds')

const newYears = prompt("Enter date DD MMM YYYY");
const eventS = prompt("Enter the Event");
const eventEl = document.getElementById('eventId');
eventEl.innerHTML = eventS;
function countDown()
{
    const newYearsDate = new Date(newYears);
    const currentDate  = new Date();
    const tseconds  = (newYearsDate - currentDate)/1000;
    const days = Math.floor(tseconds/ 3600 / 24);
    const hours = Math.floor(tseconds/ 3600 )% 24;
    const minutes = Math.floor(tseconds/ 60 )% 60;
    const seconds = Math.floor(tseconds% 60 );
    console.log(days, hours, minutes, seconds)

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML =formatTime(minutes);
    secEl.innerHTML = formatTime(seconds); 
function formatTime(time)
{
    return time < 10 ? `0${time}` : time;
}

}
//initial call
countDown();

setInterval(countDown,1000);