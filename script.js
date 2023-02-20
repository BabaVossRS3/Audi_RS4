let values = document.querySelectorAll('#second');
let interval = 5000;


window.addEventListener('scroll' , function(){
    const scrollHeight = window.pageYOffset;

    if(scrollHeight > 1900){
        values.forEach((values) => {

            let start = 0;
            let end = parseInt(values.getAttribute("data-val"));
            let duration = Math.floor(interval / end );
            let counter = setInterval(function(){
                start += 1;
                values.textContent = start;
                if(start == end) {
                    clearInterval(counter);
                }
            } ,  duration );
        });
    }
    

});
