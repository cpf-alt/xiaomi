function setCookie(key, val, n) {
    var oDate = new Date();
    oDate.setDate(oDate.getDate() + n);
    document.cookie = `${key}=${val};expires=${oDate}`;
}
// 
// function getCookie(key) {
// var str = document.cookie;
// var arr = str.split("; ");
// for (var i = 0; i < arr.length; i++) {
// var brr = arr[i].split("=");
// if (brr[0] === key) {
// return brr[1];
// }
// }
// }
// 
// function removeCookie(key) {
// setCookie(key, "", -1);
// }
function setCookie(key, val, n) {
    let oDate = new Date();
    oDate.setDate(oDate.getDate() + n);
    document.cookie = `${key}=${val};expires=${oDate}`;

}
function getCookie(key) {
    var str = document.cookie;
    var arr = str.split("; ")
    for (let i = 0; i < arr.length; i++) {
        var brr = arr[i].split("=");
        if (brr[0] === key) {
            return brr[1]
        }
    }

}
function moveCookie(key) {
    setCookie(key, "", -1);
}