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

//  头像变化
var avatar = document.querySelector("#aside_content .card-info img");
    avatar.onmouseover = function () {
      avatar.style.cssText = "animation: bigger 2s;width:115px; height:115px; border:3px solid #ff4000; padding:3px;";
    }
    avatar.onmouseout = function () {
        avatar.style.cssText = "animation: smaller 2s;width:105px; height:105px;";
    }

//  pwa
  if ('serviceWorker' in navigator) {
    if (navigator.serviceWorker.controller) {
      navigator.serviceWorker.addEventListener('controllerchange', function () {
        showNotification()
      })
    }

    window.addEventListener('load', function () {
      navigator.serviceWorker.register('/sw.js')
    })
  }

  function showNotification() {
    if (GLOBAL_CONFIG.Snackbar) {
      var snackbarBg =
        document.documentElement.getAttribute('data-theme') === 'light'
          ? GLOBAL_CONFIG.Snackbar.bgLight
          : GLOBAL_CONFIG.Snackbar.bgDark
      var snackbarPos = GLOBAL_CONFIG.Snackbar.position
      Snackbar.show({
        text: '✨ 网站已经更新最新版本 👉',
        backgroundColor: snackbarBg,
        duration: 500000,
        pos: snackbarPos,
        actionText: '点击刷新',
        actionTextColor: '#fff',
        onActionClick: function (e) {
          location.reload()
        },
      })
    } else {
      var showBg =
        document.documentElement.getAttribute('data-theme') === 'light'
          ? '#49b1f5'
          : '#1f1f1f'
      var cssText = `top: 0; background: ${showBg};`
      document.getElementById('app-refresh').style.cssText = cssText
    }
  }


