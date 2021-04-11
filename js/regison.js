let oInput = document.querySelectorAll("input");
let oSpan = document.querySelectorAll("#op");
let a = document.querySelectorAll("a")
oInput[0].onchange = function () {
    var val = oInput[0].value;
    var reg = /^[a-zA-Z_]\w{5,14}$/;
    if (reg.test(val)) {
        oSpan[0].innerText = "格式正确";
        oSpan[0].style.color = "green";
    } else {
        oSpan[0].innerText = "格式错误"
        oSpan[0].style.color = "red"
    }
}
oInput[1].onchange = function () {
    var val = oInput[1].value;
    var reg = /^1(3|4|5|6|7|8|9)\d{9}$/;
    if (reg.test(val)) {
        oSpan[1].innerText = "格式正确";
        oSpan[1].style.color = "green";
    } else {
        oSpan[1].innerText = "格式错误"
        oSpan[1].style.color = "red"
    }
}
oInput[2].onchange = function () {
    var val = oInput[2].value;
    var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
    if (reg.test(val)) {
        oSpan[2].innerText = "格式正确";
        oSpan[2].style.color = "green";
    } else {
        oSpan[2].innerText = "格式错误"
        oSpan[2].style.color = "red"
    }
}
oInput[3].onchange = function () {
    var val = oInput[2].value;
    if (oInput[3].value == val) {
        oSpan[3].innerText = "true";
        oSpan[3].style.color = "green";
    } else {
        oSpan[3].innerText = "false";
        oSpan[3].style.color = "red";
    }
}
let btn = document.querySelector("#btn")
btn.onclick = function () {
    console.log(a[1].href)
    if (oSpan[0].innerText == "格式正确" && oSpan[1].innerText == "格式正确" && oSpan[2].innerText == "格式正确" && oSpan[3].innerText == "true") {
        $.get("http://jx.xuzhixiang.top/ap/api/reg.php", {
            username: oInput[1].value,
            password: oInput[2].value
        }, res => {
            alert(res.msg)
            location.href = "http://127.0.0.1:8080/login.html"
        })
    } else {
        alert("注册失败")
    }
}
console.log(a)