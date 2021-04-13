let m1 = document.querySelector("#mi-iphone");
let m2 = document.querySelector("#mi-iphone1");
let m3 = document.querySelector("#mi-iphone2");
let m4 = document.querySelector("#mi-iphone3");
let m5 = document.querySelector("#mi-iphone4");
let id = location.search.split("=")[1];
$.get("http://jx.xuzhixiang.top/ap/api/detail.php", {
    id: id
}).then(res => {
    console.log(res.data)
    m1.innerHTML = res.data.pname;
    m2.innerHTML = res.data.pdesc;
    m3.innerHTML = res.data.pname;
    m4.innerHTML = res.data.pprice;
    m5.innerHTML = res.data.pprice;
})
$(".onc").click(function () {
    $(".onk").show();
    $.get("http://jx.xuzhixiang.top/ap/api/add-product.php", {
        uid: 9087,
        pid: id,
        pnum: 1
    }).then(res => {
    })
})