//storing countdown in own global variable
let countdown;

function timer(seconds) {
    const now = Date.now(); // gives you current time stamp
    const then = now + seconds * 1000;   

    //need to display every second left by creating setInterval and running it every second
    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000); // in miliseconds so divide by 1000
        // check if we should stop it before we display import PropTypes from 'prop-types'
        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        console.log(secondsLeft);
    }, 1000);
};



