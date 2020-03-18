(function (win, doc, undefined) {
    const docEl = doc.documentElement
    const resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize'
    const recalEvt = function () {
        const clientWidth = docEl.clientWidth
        if (clientWidth === undefined) return;
        docEl.style.fontSize = clientWidth / 20 + 'px'
    }
    if (doc.addEventListener === undefined) { return }
    win.addEventListener(resizeEvt, recalEvt, false)
    doc.addEventListener('DOMContentLoaded', recalEvt, false)
    console.log('xxx')
})(window, document)