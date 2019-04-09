const timer = new Timer(1);
timer.start();

timer.onChange = (t) => {
    document.getElementById('test').innerText = t.currentTime;
    const perc = (1 - (t.duration - t.currentTime)/t.duration) * 100;
    document.querySelector('.progress.value').style.width = perc + '%';
 console.log(t);


}



const timer2 = new Timer(1, true);

timer2.onChange = (t) => {
    document.getElementById('test2').innerText = t.currentTime;
 console.log(t);
}

setTimeout(()=>{
    timer.pause();
    timer2.pause();
}, 15000)

