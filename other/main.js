// 标题变化
let OriginTitle = document.title;
let titleTime;
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        document.innerHTML = '<link rel="icon" href="images/favicon.ico.png"/>';
        document.title = 'aya 崩溃啦';
        clearTimeout(titleTime);
    } else {
        document.innerHTML = '<link rel="icon" href="images/favicon.ico.png"/>';
        document.title = 'ya 又好了';
        titleTime = setTimeout(function() {
            document.title = OriginTitle;
        }, 2000);
    }
});
