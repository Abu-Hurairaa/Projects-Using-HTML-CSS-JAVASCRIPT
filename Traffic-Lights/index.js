var n=1;
var i= 0; 
var cArray = ['red','yellow','green'];
function TrafficLight(){
    var l = document.getElementsByClassName('light');
    for(j=0; j<l.length; j++){
        l[j].style.background = 'black';
        l[j].innerHTML =" ";
    }
    l[i].style.background= cArray[i];
    if(i < l.length){
        if(n<=3){
            l[i].innerHTML = n;
            n++;
        }
        if(n===4){
            i++;
            n=1;
            if(i===3){
                i=0;
            }
        }
    }

}

setInterval(TrafficLight,1000)