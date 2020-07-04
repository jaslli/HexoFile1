(function (e, t) {
    var n = function (e) {
        return new n.prototype.init(e)
    };
    n.prototype = {
        constructor: n,
        init: function (e) {
            return this.changeBanner(e), console.log("\n %c 小康蝴蝶主题魔改工具库" + this.version + " %c https://www.tzki.cn/xkTool/ \n", "color: #fff; background: #4285f4; padding:5px 0;", "background: #66CCFF; padding:5px 0;"), this
        },
        selector: "",
        imgList: ["https://ae01.alicdn.com/kf/Hdfb4baf1c40a4b73a6662184b1016b39Y.jpg"],
        version: "1.0.0"
    }, n.extend = n.prototype.extend = function (e) {
        for (var t in e) this[t] = e[t]
    }, n.extend({
        randomNum: function (e, t) {
            return Math.floor(Math.random() * (t - e)) + e
        }
    }), n.extend({
        setColor: function (e, t) {
            var n = "--light_bg_color: rgb(255, 255, 255," + t + ");",
                o = "--dark_bg_color: rgba(18,18,18," + t + ");";
            e.setAttribute("style", n + o)
        },
        setBg: function (e) {
            $("#web_bg").css({
                background: "url(" + e + ")",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            })
        }
    }), n.prototype.extend({
        consoleAnchor: function () {
            return $(".toc-link").click(function (e) {
                console.log(this.href)
            }), this
        },
        codeFull: function () {
            return $(".highlight-tools").append('<i class="fas fa-fingerprint fullScreen"></i>'), $(".highlight-tools").delegate(".fullScreen", "click", function () {
                $(this).parent().parent().toggleClass("code-block-fullscreen")
            }), this
        }
    }), n.prototype.extend({
        changeBanner: function (e) {
            return null != e && -1 != e.search("http") ? $(".full_page").css({
                backgroundImage: 'url("https://ae01.alicdn.com/kf/H18a4b998752a4ae68b8e85d432a5aef0l.png"), linear-gradient(60deg, rgba(255, 165, 150, 0.5) 5%, rgba(0, 228, 255, 0.35)), url(' + e + ")"
            }) : "transparent" == e && $(".full_page").css({
                background: "transparent"
            }), this
        },
        mobileSidebar: function () {
            for (var e = document.getElementById("mobile-sidebar-menus"), t = e.getElementsByClassName("menus_item_child"), n = e.getElementsByClassName("menus-expand"), o = 0; o < t.length; o++) t[o].style.display = "none", n[o].className += " menus-closed";
            return this
        },
        bgPage: function () {
            var e = document.getElementById("web_bg"),
                t = document.getElementById("content-inner"),
                o = Cookies.get("opacity") ? Cookies.get("opacity") : .5,
                i = Cookies.get("bg"),
                a = Cookies.get("animation"),
                r = Cookies.get("type");
            return i && (e.style.background = i, e.setAttribute("data-type", r), a && (e.style.animation = a)), n.setColor(t, o), this
        },
        randomBg: function () {
            var e = this.imgList.length;
            return num = n.randomNum(0, e), n.setBg(this.imgList[num]), n
        }
    }), n.prototype.extend({
        appendSocial: function (e) {
            for (var t in e) $(".card-info-social-icons").append('<a class="social-icon" href="' + e[t] + '" target="_blank"><svg class="icon" aria-hidden="true" style="width: 1em;height: 1em;vertical-align: -0.15em;fill: currentColor;overflow: hidden;"><use xlink:href="#' + t + '"></use></svg></a>')
        },
        cheatTitle: function (e, t, n, o) {
            var i, a = document.title;
            return document.addEventListener("visibilitychange", function () {
                document.hidden ? ($('[rel="icon"]').attr("href", n || "https://cdn.jsdelivr.net/gh/sviptzk/StaticFile_HEXO@v3.2.7.1/butterfly/img/favicon.ico"), document.title = e || "！！这里这里 ◕ ں ◕ ", clearTimeout(i)) : ($('[rel="icon"]').attr("href", o || "https://cdn.jsdelivr.net/gh/sviptzk/StaticFile_HEXO@v3.2.7.1/butterfly/img/favicon.ico"), document.title = t || "(ฅ>ω<*ฅ) 欢迎回来哦！爱你哟~" + a, i = setTimeout(function () {
                    document.title = a
                }, 2e3))
            }), this
        },
        magicCirle: function (t, n, o, i) {
            return $(".scroll-down").after('<canvas id="canvas" width="1700px" height="470"></canvas>'), $(""), $.fn.circleMagic = function (t) {
                function n() {
                    d = $(e).width(), u = $(e).height(), p = {
                        x: 0,
                        y: u
                    }, h = document.querySelector(y.elem), h.style.height = u + "px", o(), g = document.getElementById("canvas"), g.width = d, g.height = u, f = g.getContext("2d");
                    for (let e = 0; e < d * y.densety; e++) {
                        let e = new s;
                        b.push(e)
                    }
                    c()
                }

                function o() {
                    let e = document.createElement("canvas");
                    e.id = "canvas", h.append(e)
                }

                function i() {
                    e.addEventListener("scroll", a), e.addEventListener("resize", r)
                }

                function a() {
                    m = !(document.body.scrollTop > u)
                }

                function r() {
                    d = e.innerWidth, u = e.innerHeight, h.style.height = u + "px", g.width = d, g.height = u
                }

                function c() {
                    if (m) {
                        f.clearRect(0, 0, d, u);
                        for (let e in b) b[e].draw()
                    }
                    requestAnimationFrame(c)
                }

                function l() {
                    let e = Math.floor(255 * Math.random()),
                        t = Math.floor(255 * Math.random()),
                        n = Math.floor(255 * Math.random()),
                        o = Math.random().toPrecision(2),
                        i = `rgba(${e}, ${t}, ${n}, ${o})`;
                    return i
                }

                function s() {
                    function e() {
                        t.pos.x = Math.random() * d, t.pos.y = u + 100 * Math.random(), t.alpha = .1 + Math.random() * y.clearOffset, t.scale = .1 + .3 * Math.random(), t.speed = Math.random(), "random" === y.color ? t.color = l() : t.color = y.color
                    }
                    let t = this;
                    t.pos = {}, e(), this.draw = function () {
                        t.alpha <= 0 && e(), t.pos.y -= t.speed, t.alpha -= 5e-4, f.beginPath(), f.arc(t.pos.x, t.pos.y, t.scale * y.radius, 0, 2 * Math.PI, !1), f.fillStyle = t.color, f.fill(), f.closePath()
                    }
                }
                let d, u, h, g, f, p, m = !0,
                    b = [],
                    y = $.extend({
                        elem: ".header",
                        color: "rgba(255,225,225,.4)",
                        radius: 20,
                        densety: .3,
                        clearOffset: .2
                    }, t);
                n(), i()
            }, $(".full_page").css({
                overflow: "hidden"
            }).circleMagic({
                elem: ".full_page",
                radius: t || 18,
                densety: n || .1,
                color: o || "random",
                clearOffset: i || .3
            }), this
        }
    }), n.prototype.init.prototype = n.prototype, e.xkTool = n
})(window);







var wsl = new xkTool(
    "https://cdn.jsdelivr.net/gh/jaslli/HexoFile1@latest/top_img.jpg"
);


wsl.mobileSidebar();
wsl.codeFull();
wsl.consoleAnchor();
wsl.bgPage();