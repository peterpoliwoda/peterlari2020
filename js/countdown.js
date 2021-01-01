(function() {

    function pad(number) {
        number = +number;
        if (number < 10) {
            return ('0' + number);
        }
        return number;
    }

    function updateView(days, hours, minutes, seconds) {
        document.getElementById('countdown_days').innerHTML = pad(days);
        document.getElementById('countdown_hours').innerHTML = pad(hours);
        document.getElementById('countdown_minutes').innerHTML = pad(minutes);
        document.getElementById('countdown_seconds').innerHTML = pad(seconds);
    }

    // Ceremony is at 11:00 in Brazil which should be UTC-3
    // which I hope is correct with the current DST madness going on
    var bigDay = new Date('2021-04-17T15:00:00-03:00').getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

        var now = new Date().getTime();
        var distance = bigDay - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update view on page
        updateView(days, hours, minutes, seconds);

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById('countdown_message').innerHTML = 'The wait is no more! <br/>'
                + ' Thank you for being with us on our special day!';
            updateView(0, 0, 0, 0);
        }
    }, 1000);


})();

