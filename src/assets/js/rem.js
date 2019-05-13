// (function (win, doc) {
//     function change() {
//         doc.documentElement.style.fontSize = 100 * doc.documentElement.clientWidth / 750 + 'px';
//     }
//     change();
//     win.addEventListener('resize', change, false);
// })(window, document);
// window.onresize = setHtmlFontSize;
// function setHtmlFontSize(){
//     const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
//     const htmlDom = document.getElementsByTagName('html')[0];
//     htmlDom.style.fontSize = htmlWidth / 10 + 'px';
// };
// setHtmlFontSize();