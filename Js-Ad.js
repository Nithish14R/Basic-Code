

var sec1 =  function() {
    var seconds = document.querySelector('._seconds');
    var num_seconds = 59;
    
    var minutes = document.querySelector('._minutes');
    var minut = 59;

    var hours = document.querySelector('._hours');
    var hourse = 24;

    var days = document.querySelector('._days');
    var day = 10;
    


    setInterval(()=>{
        var sec = num_seconds--
       seconds.innerHTML=sec
       if(sec==0){
        num_seconds=59;
    }
    },1000);


    setInterval(()=>{
        var min = minut--
        minutes.innerHTML=min;
        if(min==0){
            minut=59;
        }
    },60000)


    setInterval(()=>{
        var hour=hourse--
        console.log(hours.innerHTML=hour);
        
    },3.6e+6)

    setInterval(()=>{
        var das=day--
        days.innerHTML=das;
        
    },8.64e+7)

    
}

sec1()