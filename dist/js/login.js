let oInput=document.querySelectorAll("input"),oSpan=document.querySelectorAll("#op"),btn=document.querySelector("#btn");console.log(btn),oInput[0].onchange=function(){var n=oInput[0].value;/^1(3|4|5|6|7|8|9)\d{9}$/.test(n)?(oSpan[0].innerText="格式正确",oSpan[0].style.color="green"):(oSpan[0].innerText="格式错误",oSpan[0].style.color="red")},oInput[1].onchange=function(){var n=oInput[1].value;/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/.test(n)?(oSpan[1].innerText="格式正确",oSpan[1].style.color="green"):(oSpan[1].innerText="格式错误",oSpan[1].style.color="red")},btn.onclick=function(){console.log(oSpan[0].innerText),"格式正确"==oSpan[0].innerText&&"格式正确"==oSpan[1].innerText?$.get("http://jx.xuzhixiang.top/ap/api/login.php",{username:oInput[0].value,password:oInput[1].value},n=>{alert(n.msg),setCookie("username",oInput[0].value,7),setCookie("miid",n.data.id,7),location.href="http://127.0.0.1:8080/"}):alert("请确认账号密码是否有误")};