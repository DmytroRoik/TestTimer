class Timer{
    duration;
    isAuto;
    currentTime;
    timer;

    onChange = null;

    constructor(duration, isAuto = false){
        this.duration = duration * 60;
        this.currentTime = duration * 60;
        this.isAuto = isAuto;
        if (isAuto){
            this.start();
        }
    }

    start(){
        this.timer = setInterval(()=>{
            this.currentTime--;
            if (this.onChange){
                this.onChange(this);
            }
            if (this.currentTime <= 0) this.pause();
        }, 1000);
    }

    pause(){
        clearInterval(this.timer);
        this.timer = null;
    }

    // reset(){

    // }

}
