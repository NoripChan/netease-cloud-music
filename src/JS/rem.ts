((doc:Document,win:Window)=>{
   const docEle=document.documentElement;
    const resizeEvt:String=("orientationchange" in win) ? "orientationchane" : "resize";
    function recalc () {
        let deviceWidth: Number = docEle.clientWidth;
        if (!deviceWidth) return;
        if (deviceWidth >= 750) doc.documentElement.style.fontSize = "100 px"
        else if (deviceWidth < 375) doc.documentElement.style.fontSize = "50 px"
        else doc.documentElement.style.fontSize = `${(deviceWidth as any) / 7.5} px`;
    };

    if (!doc.addEventListener && !win.addEventListener) return;
    win.addEventListener(String(resizeEvt),recalc,false);
    doc.addEventListener(String('DOMContentLoaded'),recalc,false)

})(document,window)