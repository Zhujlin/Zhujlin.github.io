let all = document.querySelector('.all');
let header = all.querySelector('.header');
let header2 = header.querySelector('.header-2');
let headerMenu = header2.querySelector('.header-menu');
let headerMenu1 = headerMenu.querySelector('.header-menu-1');

let speciesOfFlowers = document.querySelector('#speciesOfFlowers');
let downMenu11 = document.querySelector('#downMenu11');
let flowerRental = document.querySelector('#flowerRental');
let downMenu12 = document.querySelector('#downMenu12');



document.addEventListener('click',(ev)=>{
    downMenu11.style = 'visibility:hidden';
    downMenu11.style.opacity = "0";
    downMenu11.style.top = "90%";
    downMenu12.style = 'visibility:hidden';
    downMenu12.style.opacity = "0";
    downMenu12.style.top = "90%";
    if(ev.target === speciesOfFlowers){
        downMenu11.style = "visibility:visible";
        downMenu11.style.opacity = "1";
        downMenu11.style.top = "100%";
    };
    if(ev.target === flowerRental){
        downMenu12.style = "visibility:visible";
        downMenu12.style.opacity = "1";
        downMenu12.style.top = "100%";
    };
})

