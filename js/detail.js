let m1 = document.querySelector("#mi-iphone");
let m2 = document.querySelector("#mi-iphone1");
let m3 = document.querySelector("#mi-iphone2");
let m4 = document.querySelector("#mi-iphone3");
let m5 = document.querySelector("#mi-iphone4");
let m6 = document.querySelector(".miimg")
let id = location.search.split("=")[1];
console.log(getCookie("miid"))
$.get("http://jx.xuzhixiang.top/ap/api/detail.php", {
    id: id
}).then(res => {
    console.log(res.data)
    m1.innerHTML = res.data.pname;
    m2.innerHTML = res.data.pdesc;
    m3.innerHTML = res.data.pname;
    m4.innerHTML = res.data.pprice;
    m5.innerHTML = res.data.pprice;
    m6.src = res.data.pimg;
})
$(".onc").click(function () {
    if (getCookie("username")) {
        $(".onk").show();
        $.get("http://jx.xuzhixiang.top/ap/api/add-product.php", {
            uid: getCookie("miid"),
            pid: id,
            pnum: 1
        }).then(res => {
        })
    } else {
        alert("请先注册登录")

    }
})