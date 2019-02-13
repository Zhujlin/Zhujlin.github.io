//动态计算根节点的fontSize，让rem自动适配（注意：全局都用rem单位）
(function anonymous() {
    function computed() {
        let HTML = document.documentElement;
            winW = HTML.clientWidth;                   
        HTML.style.fontSize = (winW / 1366)*16  + 'px'; 
    }
    computed();
    window.addEventListener('resize', computed, false);           
})();
let HTML = document.documentElement;