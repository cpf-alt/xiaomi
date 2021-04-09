(function () {
    $(".subnav li").on({
        mouseover: function () {
            console.log("1")

        }
    })
    // $(".nav-list li").on({
    // mouseover: function () {
    // console.log("1")
    // 获取当前小li的索引号,然后找到对应索引号的盒子下拉
    // var index = $(this).index()
    // $(".bigbox").eq(index).stop().slideDown("linear");
    // },
    // mouseout: function () {
    // $(".bigbox").stop().slideUp();
    // }
    // });
    //当鼠标移动到 .subnav 这个导航栏模块时移除 li 所有绑定的事件，鼠标离开重新给li 绑定
    // $(".subnav").hover(function () {
    // $("li").off();
    // }, function () {
    // $(".bigbox").stop().slideUp()
    // $(".subnav li").mouseover(function () {
    // var index = $(this).index()
    // $(".bigbox").eq(index).stop().slideDown("linear");
    // })
    // });
    //遍历a 为它们添加一个自定义属性
    // $(".subnav li a").each(function (i, ele) {
    // $(this).attr("index", i);
    // });
    // $(".subnav li a").mouseover(function () {
    // var index = $(this).attr("index");
    // console.log(index)
    // $(".bigbox").eq(index).stop().show().siblings().stop().hide()
    // console.log($(".bigbox").eq(index).index())
    // 如果 下方这个下拉菜单的索引号为负数则菜单做上啦滑动（待改进）
    // if ($(".bigbox").eq(index).index() < 0) {
    // $(".bigbox").stop().slideUp()
    // }
    // })
})()