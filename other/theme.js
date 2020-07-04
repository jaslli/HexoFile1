var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/img/trhx2.png");
        document.title = '(°ー°〃)崩溃啦！';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/img/trhx2.png");
        document.title = 'ヾ( ﹁ ﹁ ) ~→其实没有' ;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});




/* eslint-disable */
(function ($) {
    "use strict";
    function setTabs() {
      const $tabs = $(".tabs");
      if ($tabs.length === 0) return;
      let $navs = $tabs.find(".nav-tabs .tab");
      for (var i = 0; i < $navs.length; i++) {
        let $a = $tabs.find($navs[i].children[0]);
        $a.addClass($a.attr("href"));
        $a.removeAttr("href");
      }
      $(".tabs .nav-tabs").on("click", "a", (e) => {
        e.preventDefault();
        e.stopPropagation();
        let $tab = $(e.target.parentElement.parentElement.parentElement);
        $tab.find(".nav-tabs .active").removeClass("active");
        $tab.find(e.target.parentElement).addClass("active");
        $tab.find(".tab-content .active").removeClass("active");
        $tab.find($(e.target).attr("class")).addClass("active");
        return false;
      });
    }
  
    $(function () {
      setTabs();
      // $(".article .video-container").fitVids();
      $(".scroll-down").on("click", function () {
        scrolltoElement(".l_body");
      });
      setTimeout(function () {
        $("#loading-bar-wrapper").fadeOut(500);
      }, 300);
    });
  })(jQuery);







  /*手机默认不展开*/
var mobile_sidebar_menus = document.getElementById("mobile-sidebar-menus");
var menus_item_child = mobile_sidebar_menus.getElementsByClassName(
  "menus_item_child"
);
var menus_expand = mobile_sidebar_menus.getElementsByClassName("menus-expand");
for (var i = 0; i < menus_item_child.length; i++) {
  menus_item_child[i].style.display = "none";
  menus_expand[i].className += " menus-closed";
}



