/* 手机客户端导航栏默认隐藏 */


// 标题变化
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/img/favicon.ico");
        document.title = 'aya 崩溃啦';
        clearTimeout(titleTime);
    } else {
        $('[rel="icon"]').attr('href', "/img/favicon.ico");
        document.title = 'ya 又好了';
        titleTime = setTimeout(function() {
            document.title = OriginTitle;
        }, 2000);
    }
});

// 页脚博主
$(document).ready(function(e) {
    $('.copyright').html('©2020 <i style="color:#FF6A6A;animation: announ_animation 0.8s linear infinite;" class="fa fa-heartbeat"></i> Yw');
});


