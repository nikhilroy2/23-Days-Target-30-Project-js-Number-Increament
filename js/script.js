{
    let count = document.querySelectorAll('.count');
    let card = document.querySelectorAll('.card');
    let numCount = 0;
    let setTime = setInterval(function(){
        numCount++;
        count.forEach((a,b,c)=> {
            if (numCount >= 0 && numCount <= 3000) {
                c[0].innerHTML = 2900 + numCount + '+';
            }
            if (numCount >= 0 && numCount <= 50) {
                c[1].innerHTML = numCount + '+';
            }
            if (numCount >= 0 && numCount <= 90) {
                c[2].innerHTML = numCount + '+';
            }
            if (c[0].innerHTML >= '3000+') {
                clearInterval(setTime);
            }
            
        }
        
        
        );
        card.forEach((e,f,g)=> {
            e.style.boxShadow = `1px 1px ${numCount/3}px 1px #000, 
                                 2px 2px ${numCount/10}px inset white`;
        })
    }, 45)
}