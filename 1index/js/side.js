let side = document.querySelector('#side');
let goTop = document.querySelector('.goTop');


sideShow ()
window.onscroll = function(){
    sideShow ()
};
function sideShow (){
    let t = document.documentElement.scrollTop;

    if(t>1){     
        side.style.visibility="visible";
        side.style.opacity = "1";       
    };
    if(t<=1){
        side.style.opacity = "0";
        side.style.visibility="hidden";
    }
};

goTop.onclick = function(){
    (function smoothscroll(){
        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
            window.requestAnimationFrame(smoothscroll);
            window.scrollTo (0,currentScroll - (currentScroll/5));
        }
    })();
};



