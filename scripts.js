function timer(seconds) {
    const now = Date.now(); // gives you current time stamp
    const then = now + seconds * 1000;   
    console.log({now, then});

    //need to display every second left by creating setInterval and running it every second
    setInterval(() => {
        const secondsLeft = (then - Date.now()) / 1000; // in miliseconds so divide by 1000
        
    }, 1000);
};



