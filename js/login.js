let oInput = document.querySelectorAll("input");
let oSpan = document.querySelectorAll("#op")
let btn = document.querySelector("#btn")
console.log(btn)
oInput[0].onchange = function () {
    var val = oInput[0].value;
    var reg = /^1(3|4|5|6|7|8|9)\d{9}$/;
    if (reg.test(val)) {
        oSpan[0].innerText = "格式正确";
        oSpan[0].style.color = "green";
    } else {
        oSpan[0].innerText = "格式错误";
        oSpan[0].style.color = "red";
        // console.log("1")
    }
}
oInput[1].onchange = function () {
    var val = oInput[1].value;
    var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
    if (reg.test(val)) {
        oSpan[1].innerText = "格式正确";
        oSpan[1].style.color = "green";
    } else {
        oSpan[1].innerText = "格式错误";
        oSpan[1].style.color = "red";
    }
}
btn.onclick = function () {
    console.log(oSpan[0].innerText)
    if (oSpan[0].innerText == "格式正确" && oSpan[1].innerText == "格式正确") {
        $.get("http://jx.xuzhixiang.top/ap/api/login.php", {
            username: oInput[0].value,
            password: oInput[1].value
        }, res => {
            alert(res.msg)
            setCookie("username", oInput[0].value, 7);
            location.href = "http://127.0.0.1:8080/"
        })
    } else {
        alert("请确认账号密码是否有误")
    }
}