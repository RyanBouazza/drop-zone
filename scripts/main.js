(function () {

    let timer = 1152725000; //13d 08h 12m 05s
    let date = "05/14/2021";
    let arrClock = [];
    let clock = 0;
    let interval;
    let delay;

    if (date) {
        var arrDate = date.split("/")
        var dateTimer = new Date(arrDate[2], arrDate[0] - 1, arrDate[1]);
        timer = dateTimer.getTime() - Date.now();
    }
    
    function countdown() {
        delay = Date.now();
        interval = setInterval(update, 200);
    }

    function update() {
        clock += delta();
        render();
    }

    function delta() {
        var now = Date.now();
        var d = now - delay;
        delay = now;
        return d;
    }

    function render() {
        var remainder = timer - clock;
        var days = Math.floor(remainder / 86400000);
        remainder -= days * 86400000;
        var hours = Math.floor(remainder / 3600000);
        remainder -= hours * 3600000;
        var minutes = Math.floor(remainder / 60000);
        remainder -= minutes * 60000;
        var seconds = Math.floor(remainder / 1000);
        if (days < 10) days = "0" + days;
        if (hours < 10) hours = "0" + hours;
        if (minutes < 10) minutes = "0" + minutes;
        if (seconds < 10) seconds = "0" + seconds;
        var strTime = `${days}${hours}${minutes}${seconds}`;
        arrClock = strTime.split("");

        for (let i = 0; i < arrClock.length; i++) {
            document.querySelector(`.countdown-${i+1}`).innerHTML = arrClock[i];
        }
    }

    window.addEventListener('load', countdown);

})();