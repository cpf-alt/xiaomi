let m1=document.querySelector("#mi-iphone"),m2=document.querySelector("#mi-iphone1"),m3=document.querySelector("#mi-iphone2"),m4=document.querySelector("#mi-iphone3"),m5=document.querySelector("#mi-iphone4"),id=location.search.split("=")[1];$.get("http://jx.xuzhixiang.top/ap/api/detail.php",{id:id}).then(e=>{console.log(e.data),m1.innerHTML=e.data.pname,m2.innerHTML=e.data.pdesc,m3.innerHTML=e.data.pname,m4.innerHTML=e.data.pprice,m5.innerHTML=e.data.pprice}),$(".onc").click(function(){$(".onk").show(),$.get("http://jx.xuzhixiang.top/ap/api/add-product.php",{uid:9087,pid:id,pnum:1}).then(e=>{})});