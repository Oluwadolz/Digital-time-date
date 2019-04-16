// To check for Time.
function digitalClock(){

   var date = new Date();

   var hours = date.getHours() + '';

   var minutes = date.getMinutes() + '';

   var seconds = date.getSeconds() + '';

   var day = date.getDay();

   if (hours.length < 2) {

     hours = '0' + hours;

   }

   if (minutes.length < 2) {

      minutes = '0' + minutes;

   }

   if (seconds.length < 2) {

     seconds = '0' + seconds;

   }

   var clock = hours + ':' + minutes + ':' + seconds;

   document.getElementById('clock').innerHTML = clock;
   document.getElementById('clock').style.color = ('#00d0ff','#25ffbf');
   document.getElementById('clock').style.textAlign = 'center';

  for (var i = 0; i < hours.length; i++) {
    hours[i]

    if (hours < 12) {
      var clock =  hours + ':' + minutes + ':' + seconds + ' AM'
      document.getElementById('clock').innerHTML = clock;
    }else if (hours >= 12) {
      var clock =   hours + ':' + minutes + ':' + seconds + ' PM'
      document.getElementById('clock').innerHTML = clock;
    }

  }


}

digitalClock();

setInterval(digitalClock, 1000);

// To check for Date

function digitalTime(){

   var date = new Date();

   var month= date.getMonth() + '';

   var dates = date.getDate() + '';

   var day = date.getDay();

   var year = date.getFullYear();




   var weekDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

   var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'july', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

   var time = weekDay[day]  + ', ' +  months[month] + ' ' + dates + ', ' + year;

   document.getElementById('time').innerHTML = time;
   document.getElementById('time').style.color = ('#00d0ff','#25ffbf');
   document.getElementById('time').style.textAlign = 'center';



}


digitalTime();

setInterval(digitalTime, 1000);
