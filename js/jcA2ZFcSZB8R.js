



// var $categories = $("#categories");
//      $.ajax({
//             type: 'GET',
//             url: 'data/categories.json',
//             dataType: 'json',
//             success: function(data) {
//                 $("#categoriesSpinner").hide();
//                     for (i = 0; i < data.length; i++) {
//                         $categories.append('\
//                     <div class="item">\
//                      <div class="category_block">\
//                      <i class="' + data[i].icon + '"></i>\
//                      <strong>' + data[i].category + '</strong>\
//                      </div>\
//                   </div>');
//                     }
//                     $(".loading_spinner").hide();
//                     categories();

//             }
//         });


// var $Favorite = $("#Favorite");
//    $.ajax({
//     type: 'GET',
//     url: 'data/flowers.json',
//     dataType: 'json',
//     success: function(data) {
//           $("#favoriteSpinner").hide();
//         for (i = 0; i < data.length; i++) {
//             $Favorite.append('\
//                     <div class="item">\
//                      <div class="product">\
//                         <div class="product_img contain">\
//                            <a href="viewpage.php" class="img" style="background: url(' + data[i].flower_img + ');"></a>\
//                         </div>\
//                         <div class="product_body">\
//                            <strong>' + data[i].flower_name + '</strong>\
//                            <h3><span class="original_price"><del><span class="rupee">&#x20B9;</span>'+ data[i].flower_original_price +'</del></span> <span class="rupee">&#x20B9;</span>' + data[i].flower_price + '</h3>\
//                            <a  class="btn btn-primary btn-round  text-uppercase add-to-cart"><i class="icon-basket"></i> Add to Cart</a>\
//                         </div>\
//                      </div>\
//                   </div>');
//         }
//         favorite();
//     }
// });

// var $browse = $("#browse");
//         $.ajax({
//     type: 'GET',
//     url: 'data/occasions.json',
//     dataType: 'json',
//     success: function(data) {
//         $("#browseSpinner").hide();
//         for (i = 0; i < data.length; i++) {
//             $browse.append('\
//                     <div class="item">\
//                      <div class="product product_browse">\
//                         <div class="product_img contain">\
//                            <div class="img" style="background: url(' + data[i].occasion_img + ');"></div>\
//                         </div>\
//                         <div class="product_body">\
//                            <strong>' + data[i].occasion_name + '</strong>\
//                            <a  class="btn btn-success btn-round">Explore <span class="icon-arrow-right"></span></a>\
//                         </div>\
//                      </div>\
//                   </div>');
//         }
//         browse();
//     }
// });





// var $flowers = $("#flowers");
// $.ajax({
//     type: 'GET',
//     url: 'data/flowers.json',
//     dataType: 'json',
//     success: function(data) {
//         for (i = 0; i < data.length; i++) {
//             $flowers.append('\
//                     <div class="col-md-3 c-p-05">\
//                      <div class="product">\
//                         <div class="product_img contain">\
//                            <a href="viewpage.php" class="img" style="background: url(' + data[i].flower_img + ');"></a>\
//                         </div>\
//                         <div class="product_body">\
//                            <strong>' + data[i].flower_name + '</strong>\
//                            <h3><span class="original_price"><del><span class="rupee">&#x20B9;</span> '+ data[i].flower_original_price +'</del></span><span class="rupee">&#x20B9;</span>' + data[i].flower_price + '</h3>\
//                            <a  class="btn btn-primary btn-round  text-uppercase add-to-cart"><i class="icon-basket"></i> Add to Cart</a>\
//                         </div>\
//                      </div>\
//                   </div>');
//         }
//     }
// });

// var $banners = $("#banners");
// $.ajax({
//     type: 'GET',
//     url: 'data/home.json',
//     dataType: 'json',
//     success: function(data) {
//         for (i = 0; i < data.slider.length; i++) {
//             $banners.append('\
//                     <div class="item">\
//                   <div class="cap">\
//                      <div class="container-fluid">\
//                         <h1>'+data.slider[i].text+'</h1>\
//                      </div>\
//                   </div>\
//                   <div class="img" style="background: url('+data.slider[i].img+');"></div>\
//                </div>');
//         }
//          banners();
//     }
// });


// var $cart_tabel = $(".panel-cart .panel-items");
// $cart_tabel.prepend('<div class="cart_item_row cart_item_loading"><div class="loader2 fa-spin"></div></div>');
// $.ajax({
//     type: 'GET',
//     url: 'data/flowers.json',
//     dataType: 'json',
//     success: function(data) {
//         setTimeout(function() {
//             for (i = 1; i < data.length; i++) {
//                 $cart_tabel.append('\
//                 <div class="cart_item_row">\
//             <div class="row">\
//             <div class="col-md-6"><div class="img" style="background: url(' + data[i].flower_img + ');"></div>\
//             <b>' + data[i].flower_name + '</b><small class="text-muted">Product Short Description Comes Here</small></div>\
//             <div class="col-md-2">\
//             <strong>' + data[i].flower_price + '\
//             <input type="hidden" class="hprice" value="' + data[i].flower_price + '">\
//              </strong>\
//             </div>\
//             <div class="col-md-2"><input class="qty" type="text" value="1"></div>\
//             <div class="col-md-2"><button type="button" class="btn btn-primary btn-sm btn-round pull-right"><i class="fa fa-trash"></i></button></div>\
//             </div>\
//             </div>');
//             }
//             qty();
//             $(".cart_item_loading").remove();
//         }, 0);
//     }
// });


// function calc(qtyinput){
// var $this = qtyinput;
// var $row = $this.closest(".cart_item_row");
// var $hprice = $row.find(".hprice");
// var $rprice = $row.find(".rprice");
// var $qty_html = $row.find(".qty_html");

// var $calc = $hprice.val() * $this.val();
// $rprice.html($calc);
// $qty_html.html($this.val());

// }


// $(document).on('touchspin.on.startspin keyup','.cart_item_row .qty',function(){


// calc(qtyinput=$(this));

// });
// setTimeout(function(){
//     calc(qtyinput=$('.cart_item_row .qty'));
// }, 200);





// var $orders = $(".panel-cart .panel-orders");
// $orders.prepend('<div class="cart_item_row cart_item_loading"><div class="loader2 fa-spin"></div></div>');
// $.ajax({
//     type: 'GET',
//     url: 'data/flowers.json',
//     dataType: 'json',
//     success: function(data) {
//         setTimeout(function() {
//             for (i = 1; i < data.length; i++) {
//                 $orders.append('\
//                 <div class="cart_item_row">\
//             <div class="row">\
//             <div class="col-md-6"><div class="img" style="background: url(' + data[i].flower_img + ');"></div>\
//             <b>' + data[i].flower_name + '</b><small class="text-muted">Product Short Description Comes Here</small></div>\
//             <div class="col-md-2"><strong>' + data[i].flower_price + '</strong></div>\
//             <div class="col-md-2">2</div>\
//             <div class="col-md-2"><span class="dropdown pull-right"><button type="button" data-toggle="dropdown" class="btn btn-default btn-sm btn-round">Action <i class="fa fa-angle-down"></i></button>\
//             <ul class="dropdown-menu">\
//             <li><a href="dashboard_invoice.php">View</a></li>\
//             <li><a>Edit</a></li>\
//             <li><a>Delete</a></li>\
//             </ul>\
//             </span></div>\
//             </div>\
//             </div>');
//             }
//             qty();
//             $(".cart_item_loading").remove();
//         }, 1000);
//     }
// });





// var $invoice = $(".panel-cart .panel-invoice");
// $invoice.prepend('<div class="cart_item_row cart_item_loading"><div class="loader2 fa-spin"></div></div>');
// $.ajax({
//     type: 'GET',
//     url: 'data/flowers.json',
//     dataType: 'json',
//     success: function(data) {
//         setTimeout(function() {
//             for (i = 1; i < data.length; i++) {
//                 $invoice.append('\
//                 <div class="cart_item_row">\
//             <div class="row">\
//             <div class="col-md-6"><div class="img" style="background: url(' + data[i].flower_img + ');"></div>\
//             <b>' + data[i].flower_name + '</b><small class="text-muted">Product Short Description Comes Here</small></div>\
//             <div class="col-md-2"><strong>' + data[i].flower_price + '</strong></div>\
//             <div class="col-md-2">2</div>\
//             <div class="col-md-2">04/03/2017</div>\
//             </div>\
//             </div>');
//             }
//             qty();
//             $(".cart_item_loading").remove();
//         }, 1000);
//     }
// });



var $categories = $("#categories");
var $Favorite = $("#Favorite");
var $browse = $("#browse");
var $trends = $("#trends");
var $banners = $("#banners");
var $mobileslider = $("#mobileslider");


categories();
favorite();
browse();
banners();
trends();
mobileslider();

function categories() {
    $categories.owlCarousel({
        items: 2,
        nav: true,
        navText: false,
        loop: false,
        autoHeight: true,
        margin: 10,
        autoplay: true,
        smartSpeed: 1000,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        activeClass: 'active',
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 4
            },
            1000: {
                items: 7
            }
        }
    });
}
function favorite() {
    $Favorite.owlCarousel({
        items: 5,
        loop: true,
        autoHeight: true,
        nav: true,
        navText: false,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        activeClass: 'active',
        smartSpeed: 1000,
        dots: true,
        responsive: {
            0: {
                items: 2,
                margin: 5
            },
            600: {
                items: 3,
            },
            1000: {
                items: 6,
            }
        }
    });
}

function browse() {
    $browse.owlCarousel({
        items: 5,
        loop: true,
        autoHeight: true,
        nav: true,
        navText: false,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        activeClass: 'active',
        smartSpeed: 1000,
        dots: true,
        responsive: {
            0: {
                items: 2,
                margin: 5
            },
            600: {
                items: 3,
            },
            1000: {
                items: 6,
            }
        }
    });
}

function trends() {
    $trends.owlCarousel({
        items: 5,
        loop: true,
        autoHeight: true,
        nav: true,
        navText: false,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        activeClass: 'active',
        smartSpeed: 1000,
        dots: true,
        responsive: {
            0: {
                items: 2,
                margin: 5,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 6,
            }
        }
    });
}
function banners() {
    $banners.owlCarousel({
        items: 2,
        nav: true,
        navText: false,
        stagePadding: 0,
        loop: true,
        autoHeight: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        activeClass: 'active',
        smartSpeed: 800,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            }
        }
    });
}


function mobileslider() {
    $mobileslider.owlCarousel({
        items: 2,
        nav: true,
        navText: false,
        stagePadding: 0,
        loop: true,
        autoHeight: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        activeClass: 'active',
        smartSpeed: 800,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            }
        }
    });
}






function qty() {
    $(".qty").TouchSpin({
        verticalbuttons: true,
        verticalupclass: 'glyphicon glyphicon-plus',
        verticaldownclass: 'glyphicon glyphicon-minus'
    });
}
qty();




$(".register_btn").on("click", function () {
    $("#modal-login").modal("hide");
    setTimeout(function () {
        $("#modal-register").modal("show");
    }, 500);
});
$(".login_btn").on("click", function () {
    $("#modal-register").modal("hide");
    setTimeout(function () {
        $("#modal-login").modal("show");
    }, 500);
});
$(".forgotpass_btn").on("click", function () {
    $("#modal-login").modal("hide");
    setTimeout(function () {
        $("#modal-forgotpass").modal("show");
    }, 500);
});

var $panelcart = $(".panel-cart");
var $panelbody = $panelcart.find(".panel-body");
var $cartitem_row = $panelcart.find(".cart_item_row");
$panelbody.css({
    "max-height": 55 * 5
});





$(function () {
    $('#modal-extra').on('shown.bs.modal', function () {
        setTimeout(function () {
            $("#modal-extra .modal-dialog").removeClass("modal-sm");
            $("#modal-extra .modal-dialog").addClass("modal-lg");
            $(".loader2").hide();
            $(".results").slideDown();
        }, 2000);
    });
    $('#modal-extra').on('hidden.bs.modal', function () {
        $("#modal-extra .modal-dialog").removeClass("modal-lg");
        $("#modal-extra .modal-dialog").addClass("modal-sm");
        $(".loader2").show();
        $(".results").hide();
    });
    $(".stick_col").stick_in_parent({
        parent: ".stick_row",
        offset_top: $(".main_menu").height() + 20
    }).on('sticky_kit:bottom', function (e) {
        $(this).parent().css('position', 'static');
    }).on('sticky_kit:unbottom', function (e) {
        $(this).parent().css('position', 'relative');
    });
    if ($(window).width() < 1000) {
        console.log("mobile");
        $(".stick_col").trigger("sticky_kit:detach");
    } else {
        console.log("desktop");
    }









});
$('.datetpicker').datetimepicker({
    format: 'd-m-Y',
    timepicker: false
});
$('.mytimepicker').datetimepicker({
    format: 'H:i',
    timepicker: true,
    datepicker: false,
    step: 5
});
$(".number").TouchSpin({
    min: 1,
    max: 10,
    buttondown_txt: '<i class="fa fa-minus"></i>',
    buttonup_txt: '<i class="fa fa-plus"></i>'
});

$(".range_slider").ionRangeSlider({
    type: "double",
    grid: false,
    min: 0,
    max: 1000,
    from: 200,
    to: 800,
    prefix: "Rs"
});
$(window).load(function () {
    $("body").addClass("loading_stop");
});

setTimeout(function () {
    $("#modal-type").modal('show');
}, 150);
var stickyOffset = $('.main_menu').offset().top;
$(window).scroll(function () {
    var sticky = $('.main_menu'),
            scroll = $(window).scrollTop();
    if (scroll >= stickyOffset)
        sticky.addClass('fixed');
    else
        sticky.removeClass('fixed');
});
var related = $('#related').owlCarousel({
    items: 6,
    loop: true,
    autoHeight: true,
    nav: true,
    navText: true,
    margin: 5,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    activeClass: 'active',
    smartSpeed: 1000,
    dots: true,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3,
        },
        1000: {
            items: 6,
        }
    }
});
var owl = $('#feedback');
owl.owlCarousel({
    items: 2,
    loop: true,
    autoHeight: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    activeClass: 'active',
    smartSpeed: 1000,
    dots: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 2,
        }
    }
});

$(document).ready(function () {
    $('#modal-type').modal({
        backdrop: 'static',
        keyboard: false
    })
});
$('.selectpicker').selectpicker({
    template: {
        caret: '<span class="fa fa-angle-down"></span>'
    },
    //  iconBase:'',
    // tickIcon: 'icon-check'
});
$(function () {
    $('.scrollto').bind('click', function (event) {
        var $anchor = $(this);
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 80
        }, 1500, 'easeInOutCubic');
        event.preventDefault();
    });
});
wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 0, // default
    mobile: true, // default
    live: true // default
})
wow.init();

// $(".addItem").on("click",function(){
//  setTimeout(function(){
//     qty();
// }, 200);
// });
$.fn.ForceNumericOnly =
        function ()
        {
            return this.each(function ()
            {
                $(this).keydown(function (e)
                {
                    var key = e.charCode || e.keyCode || 0;
                    return (
                            key == 8 ||
                            key == 9 ||
                            key == 13 ||
                            key == 46 ||
                            key == 110 ||
                            key == 190 ||
                            (key >= 35 && key <= 40) ||
                            (key >= 48 && key <= 57) ||
                            (key >= 96 && key <= 105));
                });
            });
        };

$(".numeric").ForceNumericOnly();

$(document).on("keyup", ".keyup", function () {
    var $qty = $(this).closest(".custom_item").find(".qty1");
    var $price = $(this).closest(".custom_item").find(".price1");
    var $total = $(this).closest(".custom_item").find(".total1");
    var $totalCalc = $price.val() * $qty.val();

    $total.val($totalCalc);


});

$(".getcode").on("click", function () {
    var $coupon = $(this).data('coupon');

    $(".coupon_input").val($coupon);
    $("#modal-coupon").modal("hide");

});


$(".categoryfilter li").each(function () {
    var $child = $(this).find("ul");

    if ($child.length > 0) {
        $(this).addClass("has_child");
    }


});