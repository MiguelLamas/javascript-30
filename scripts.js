// storing countdown in own global variable
let countdown;

function timer(seconds) {
    const now = Date.now(); // gives you current time stamp
    const then = now + seconds * 1000;  
    displayTimeLeft(seconds); // run it once as soon as invoked, then below everytime we do the interval

    // need to display every second left by creating setInterval and running it every second
    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000); // in miliseconds so divide by 1000
        // check if we should stop timer/setInterval
        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        // display timeLeft! everytime we do the interval
        displayTimeLeft(secondsLeft);
    }, 1000);
};

// setInterval by default doesn't run immediately it elapses for 1 second before running
// to get around that we create another function

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    console.log({minutes, remainderSeconds});
}