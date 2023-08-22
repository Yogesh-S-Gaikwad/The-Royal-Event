! function (e) {
    "use strict";
    jQuery(".ttm-header-search-link a").addClass("sclose"), jQuery(".ttm-header-search-link a").on("click", function (e) {
        jQuery(".ttm-header-search-link a").hasClass("sclose") ? (jQuery(this).removeClass("sclose").addClass("open"), jQuery(".ttm-search-overlay").addClass("st-show"), jQuery(".ttm-search-overlay").slideDown(400, function () {
            jQuery(".field.searchform-s").focus()
        })) : (jQuery(this).removeClass("open").addClass("sclose"), jQuery(".ttm-search-overlay").slideUp(400, function () { })), jQuery(".ttm-search-close").on("click", function () {
            jQuery(".ttm-header-search-link a").removeClass("st-show").addClass("sclose"), jQuery(".ttm-search-overlay").slideUp(400, function () { })
        })
    // }), e(window).scroll(function () {
    //     matchMedia("only screen and (min-width: 1200px)").matches && (e(window).scrollTop() >= 30 ? (e(".ttm-stickable-header").addClass("fixed-header"), e(".ttm-stickable-header").addClass("visible-title")) : (e(".ttm-stickable-header").removeClass("fixed-header"), e("ttm-stickable-header").removeClass("visible-title")))
    }), e("ul li:has(ul)").addClass("has-submenu"), e("ul li ul").addClass("sub-menu"), e("ul.dropdown li").on({
        mouseover: function () {
            e(this).addClass("hover")
        },
        mouseout: function () {
            e(this).removeClass("hover")
        }
    });
    var t = e("#menu"),
        s = e("#menu-toggle-form"),
        a = e(".has-submenu > a");
    s.on("click", function (e) {
        s.toggleClass("active"), t.toggleClass("active")
    }), a.on("click", function (t) {
        t.preventDefault(), e(this).toggleClass("active").next("ul").toggleClass("active")
    }), e("ul li:has(ul)"), e("[data-appear-animation]").each(function () {
        var t = e(this),
            s = t.data("appear-animation");
        t.data("appear-animation-delay") && t.data("appear-animation-delay"), e(window).width() > 959 ? (t.html("0"), t.waypoint(function (e) {
            if (!t.hasClass("completed")) {
                var s = t.data("from"),
                    a = t.data("to"),
                    o = t.data("interval");
                t.numinate({
                    format: "%counter%",
                    from: s,
                    to: a,
                    runningInterval: 2e3,
                    stepUnit: o,
                    onComplete: function (e) {
                        t.addClass("completed")
                    }
                })
            }
        }, {
            offset: "85%"
        })) : "animateWidth" == s && t.css("width", t.data("width"))
    }), jQuery(".progress").each(function () {
        jQuery(this).find(".progress-bar").animate({
            width: jQuery(this).attr("data-value")
        }, 6e3)
    }), e(".ttm-tabs").each(function () {
        e(this).children(".content-tab").children().hide(), e(this).children(".content-tab").children().first().show(), e(this).find(".tabs").children("li").on("click", function (t) {
            var s = e(this).index(),
                a = e(this).siblings().removeClass("active").parents(".ttm-tabs").children(".content-tab").children().eq(s);
            a.addClass("active").fadeIn("slow"), a.siblings().removeClass("active"), e(this).addClass("active").parents(".ttm-tabs").children(".content-tab").children().eq(s).siblings().hide(), t.preventDefault()
        })
    }), e(".toggle").eq(0).addClass("active").find(".toggle-content").css("display", "block"), e(".accordion .toggle-title").on("click", function () {
        e(this).siblings(".toggle-content").slideToggle("fast"), e(this).parent().toggleClass("active"), e(this).parent().siblings().children(".toggle-content:visible").slideUp("fast"), e(this).parent().siblings().children(".toggle-content:visible").parent().removeClass("active")
    }), e(window).on(function () {
        var t = e("#isotopeContainer");
        e("#filters a").on(function () {
            var s = e(this).attr("data-filter");
            return t.isotope({
                filter: s
            }), !1
        }), e("#filters li").find("a").on(function () {
            var s = e(this);
            if (s.hasClass("selected")) return !1;
            var a = s.parents("#filters");
            a.find(".selected").removeClass("selected"), s.addClass("selected");
            var o = {},
                i = a.attr("data-option-key"),
                l = s.attr("data-option-value");
            return l = "false" !== l && l, o[i] = l, "layoutMode" === i && "function" == typeof changeLayoutMode ? changeLayoutMode(s, o) : t.isotope(o), !1
        })
    }), e(".event-slide").owlCarousel({
        margin: 30,
        nav: e(".event-slide").data("nav"),
        dots: e(".event-slide").data("dots"),
        center: e(".event-slide").data("center"),
        autoplay: e(".event-slide").data("auto"),
        autoplayHoverPause: !0,
        smartSpeed: 1e3,
        autoplayTimeout: 3e3,
        loop: !0,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    }), e(".clients-logo").owlCarousel({
        autoplay: e(".clients-logo").data("auto"),
        nav: e(".clients-logo").data("nav"),
        dots: e(".clients-logo").data("dots"),
        margin: 30,
        loop: !0,
        smartSpeed: 3e3,
        responsiveClass: !0,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            1024: {
                items: 5
            }
        }
    }), e(".portfolio-slide").owlCarousel({
        autoplay: e(".portfolio-slide").data("auto"),
        nav: e(".portfolio-slide").data("nav"),
        dots: e(".portfolio-slide").data("dots"),
        margin: 0,
        loop: !0,
        smartSpeed: 3e3,
        responsiveClass: !0,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            1e3: {
                items: 4
            }
        }
    }), e(".team-slide").owlCarousel({
        loop: !0,
        margin: 30,
        autoplay: e(".team-slide").data("auto"),
        nav: e(".team-slide").data("nav"),
        dots: e(".team-slide").data("dots"),
        smartSpeed: 3e3,
        responsiveClass: !0,
        responsive: {
            0: {
                items: 1
            },
            479: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 3
            }
        }
    }), e(".testimonial-slide").owlCarousel({
        loop: !0,
        margin: 0,
        smartSpeed: 2e3,
        autoplay: !0,
        nav: e(".testimonial-slide").data("nav"),
        dots: e(".testimonial-slide").data("dots"),
        responsive: {
            0: {
                items: 1,
                nav: !1
            },
            600: {
                items: 2,
                nav: !1
            },
            1e3: {
                items: 3,
                nav: !1,
                loop: !0
            }
        }
    }), e(".post-slide").owlCarousel({
        loop: !0,
        margin: 30,
        autoplay: e(".post-slide").data("auto"),
        nav: e(".post-slide").data("nav"),
        dots: e(".post-slide").data("dots"),
        smartSpeed: 3e3,
        responsiveClass: !0,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1e3: {
                items: 3
            }
        }
    }), e(".service-slide").owlCarousel({
        loop: !0,
        margin: 30,
        autoplay: !0,
        nav: e(".post-slide").data("nav"),
        dots: e(".post-slide").data("dots"),
        smartSpeed: 2e3,
        responsiveClass: !0,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1e3: {
                items: 3
            }
        }
    }), e(".post-img-slide").owlCarousel({
        autoplay: e(".post-img-slide").data("auto"),
        nav: e(".post-img-slide").data("nav"),
        dots: e(".post-img-slide").data("dots"),
        margin: 30,
        loop: !0,
        smartSpeed: 1e3,
        responsiveClass: !0,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            768: {
                items: 1
            }
        }
    }), e(".owl-product").owlCarousel({
        loop: !0,
        margin: 0,
        smartSpeed: 2e3,
        autoplay: !0,
        nav: !0,
        dots: !1,
        responsive: {
            0: {
                items: 1,
                nav: !1
            },
            600: {
                items: 2,
                nav: !1
            },
            1e3: {
                items: 3,
                nav: !1,
                loop: !0
            }
        }
    }), jQuery("#totop").hide(), jQuery(window).scroll(function () {
        jQuery(this).scrollTop() >= 100 ? (jQuery("#totop").fadeIn(200), jQuery("#totop").addClass("top-visible")) : (jQuery("#totop").fadeOut(200), jQuery("#totop").removeClass("top-visible"))
    }), jQuery("#totop").on("click", function () {
        return jQuery("body,html").animate({
            scrollTop: 0
        }, 500), !1
    });
    var o = new Date(Date.parse(new Date) + 1296e6);
    jQuery(".timer-box").length > 0 && function e(t, s) {
        var a = document.getElementById(t),
            o = a.querySelector(".days"),
            i = a.querySelector(".hours"),
            l = a.querySelector(".minutes"),
            n = a.querySelector(".seconds");

        function r() {
            var e, t, a = {
                total: t = Date.parse(e = s) - Date.parse(new Date),
                days: Math.floor(t / 864e5),
                hours: Math.floor(t / 36e5 % 24),
                minutes: Math.floor(t / 1e3 / 60 % 60),
                seconds: Math.floor(t / 1e3 % 60)
            };
            o.innerHTML = a.days, i.innerHTML = ("0" + a.hours).slice(-2), l.innerHTML = ("0" + a.minutes).slice(-2), n.innerHTML = ("0" + a.seconds).slice(-2), a.total <= 0 && clearInterval(d)
        }
        r();
        var d = setInterval(r, 1e3)
    }("timer-box", o), e(function () { }), jQuery(document).ready(function () {
        jQuery('[data-toggle="tooltip"]').tooltip()
    }), e(function () {
        e(".addReadMore").each(function () {
            if (!e(this).find(".firstSec").length) {
                var t = e(this).text();
                if (t.length > 90) {
                    var s = t.substring(0, 90),
                        a = t.substring(90, t.length);
                    e(this).html(s + "<span class='SecSec'>" + a + "</span><span class='readMore'  title='Click to Show More'> ... Read More</span><span class='readLess' title='Click to Show Less'> Read Less</span>")
                }
            }
        }), e(document).on("click", ".readMore,.readLess", function () {
            e(this).closest(".addReadMore").toggleClass("showlesscontent showmorecontent")
        })
    })
}(jQuery);



// when the user visits your page and use its value to determine the constant state of the page after a refresh.

localStorage.setItem("pageState", "constant");

// Retrieve the state from local storage
const pageState = localStorage.getItem("pageState");

// Check the retrieved state and apply the constant state logic if needed
if (pageState === "constant") {
  // Apply your constant state logic here
}

// Set the initial state when the page loads (you can put this in your script)
localStorage.setItem("pageState", "constant");

// Retrieve the state from local storage on page refresh
document.addEventListener("DOMContentLoaded", function() {
  const pageState = localStorage.getItem("pageState");
  // Check the retrieved state and apply the constant state logic if needed
  if (pageState === "constant") {
    // Apply your constant state logic here
    console.log("Constant state logic applied.");
  }
});





