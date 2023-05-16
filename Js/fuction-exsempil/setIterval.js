
const pinger = (num, period) => {
    const interval = setInterval(() => {
        console.log('Ping');
    }, period);
    setInterval(() => {
        clearInterval(interval);
    }, num * period);
}

pinger(5, 1000);