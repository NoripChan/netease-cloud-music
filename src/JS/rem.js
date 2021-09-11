"use strict";
((doc, win) => {
    const docEle = document.documentElement;
    const resizeEvt = ("orientationchange" in win) ? "orientationchane" : "resize";
    function recalc() {
        let deviceWidth = docEle.clientWidth;
        if (!deviceWidth)
            return;
        if (deviceWidth >= 375)
            doc.documentElement.style.fontSize = "50px";
        else if (deviceWidth > 187 && deviceWidth < 375)
            doc.documentElement.style.fontSize = `${deviceWidth / 15}px`;
        else
            doc.documentElement.style.fontSize = "25px";
    }
    ;
    if (!doc.addEventListener && !win.addEventListener)
        return;
    win.addEventListener(String(resizeEvt), recalc, false);
    doc.addEventListener(String('DOMContentLoaded'), recalc, false);
})(document, window);
//# sourceMappingURL=rem.js.map