"use strict";

const DOMclock = document.querySelector('.clock');

let HTML = ``;


for (let h = 0; h < 24; h++) {
    let hours = h;
    if ( hours < 10 ) {
        hours = '0' + hours;
    }

    for (let m = 0; m < 60; m++) {    
        let minutes = m;
        if ( minutes < 10 ) {
            minutes = '0' + minutes
        }

        for (let s = 0; s < 60; s++) {    
            let sec= s;
            if ( sec < 10 ) {
                sec = '0' + sec
            }
            HTML += `<div clas="time">${hours}:${minutes}:${sec}</div>`; 
        }   
    }
}

DOMclock.innerHTML = HTML;