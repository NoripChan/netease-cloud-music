((doc: Document, win: Window) => {
    const docEle = document.documentElement;
    const resizeEvt: String = ("orientationchange" in win) ? "orientationchane" : "resize";
    function recalc() {
        let deviceWidth: Number = docEle.clientWidth;
        if (!deviceWidth) return;
        if (deviceWidth >= 375) doc.documentElement.style.fontSize = "100px"
        else if (deviceWidth > 187 && deviceWidth < 375) doc.documentElement.style.fontSize = `${(deviceWidth as any) / 7.5}px`
        else doc.documentElement.style.fontSize = "50px";
    };

    if (!doc.addEventListener && !win.addEventListener) return;
    win.addEventListener(String(resizeEvt), recalc, false);
    doc.addEventListener(String('DOMContentLoaded'), recalc, false)

})(document, window)