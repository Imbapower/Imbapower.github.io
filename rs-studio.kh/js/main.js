


// FlipClock
var clock;
$(document).ready(function(){
var clock;
clock = $(".clock").FlipClock({
    clockFace : "DailyCounter",
    autoStart : false,
});
var dt = "June 25 2018 20:00:00";
var first = new Date(dt);
var last = Date.now();
var remaining = first - last;
remaining /=1000;

clock.setTime(remaining);
clock.setCountdown(true);
clock.start()
});
