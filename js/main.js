/* main.js */

$(function () {
	var widBody = $("body").width();

	if (widBody <= 638) {
		$(".footer1").css({ "display": "none" });
		$(".footer2").css({ "display": "block" });
	}

	$("nav.gnb>ul>li>a").bind("mouseover focus", function () {
		$(".header_wrap").stop().animate({ "height": "455px" }, 10, function () {
			$("nav.gnb > ul > li > ul").css("display", "block");
		});
	});
	$("nav.gnb").bind("mouseleave blur", function () {
		$(".header_wrap").stop().animate({ "height": "120px" }, 10, function () {
			$("nav > ul > li > ul").css("display", "none");
		});
	});

	$(".tabMenu_inner > ul > li > a").bind("click foucs", function (e) {
		e.preventDefault();
		$(".tabMenu_inner > ul > li > ul").hide();
		$(this).parent().children().show();

	});
	/* gnb2 */
	$("p.allMenu_open").click(function () {
		$("nav.gnb2").stop().animate({ "width": "500px" }, 500, function () {
			$("nav.gnb2").css("display", "block");
		});
	});
	$("p.close").click(function () {
		$("nav.gnb2").stop().animate({ "width": "0" }, 500, function () {
			$("nav.gnb2").css("display", "none");
		});
	});

	
	$(".customer > a").click(function (e) {
		e.preventDefault();

		if ($(this).next().is(":hidden")) {
			$(this).parent().addClass("on");

		} else if ($(this).next().is(":visible")) {
			$(this).parent().removeClass("on");
		}

		$(this).next().toggle();
	});


	for (i = 0; i <= 81; i++) {
		if (i < 10) {
			$(".join>a").append("<img src = 'images/loop/loop_0000" + i + ".png'>");
		} else {
			$(".join>a").append("<img src = 'images/loop/loop_000" + i + ".png'>");
		}
	}
	for (var i = 0; i <= 81; i++) {
		$(".join img").eq(i).css({ "animation": "play 4.1s linear " + 0.05 * i + "s infinite normal" });
	}


	/*  main_wrap ��� */
	var $bnnNum = 0;

	$("div.arrow > a.next").click(function (e) {
		e.preventDefault();

		$bnnNum++;
		$book_w = $("body>section").width();
		$("div.bannerzone").animate({ "left": -$book_w * $bnnNum }, 300, "linear", function () { });
	});

	$("div.arrow > a.prev").click(function (e) {
		e.preventDefault();

		$bnnNum--;
		$book_w = $("body>section").width();

		$("div.bannerzone").animate({ "left": -$book_w * $bnnNum }, 300, "linear");
	});


	var banner = null;
	function myAuto() {
		var imgs = 3;
		var now = 0;
		banner = setInterval(function () {
			if (now == imgs) now = -1;
			now++;
			nxt = $("body>section").width();
			$(".bannerzone").animate({ "left": -nxt * now }, function () {
				$(".btn img").attr("src", "images/btn_banner_out.png");
				$(".btn img").eq(now).attr("src", "images/btn_banner_over.png");
			});
		}, 3000);
	}
	myAuto(); 

	var flag = 1; //true
	$(".stop a").click(function () {

		if (flag) {
			clearInterval(banner); //�ٽ� ���
			$(this).children("img").attr("src", "images/btn_banner_start.png")
			flag = 0;
		} else {
			myAuto(); //ȣ��
			$(this).children("img").attr("src", "images/btn_banner_stop.png")
			flag = 1;
		}

	});



	$(".Shortcut > a").click(function (e) {
		e.preventDefault();

		if ($(this).next().is(":hidden")) {
			$(this).parent().addClass("on");

		} else if ($(this).next().is(":visible")) {
			$(this).parent().removeClass("on");
		}

		$(this).next().toggle();
	});


});

$(document).ready(function () {

	var flag = 1;
	$("div.search").click(function () {

		if (flag) {
			$(".global_search").css("display", "block");
			flag = 0;
		} else {
			$(".global_search").css("display", "none");
			flag = 1;
		}
	});
});
// $(document).ready(function () {

// 	var flag = 1;
// 	$("div.search").click(function () {

// 		if (flag) {
// 			$("div.search .on").css("display", "block");
// 			flag = 0;
// 		} else {
// 			$("div.search .on").css("display", "none");
// 			flag = 1;
// 		}
// 	});
// });
$(".search").click(function (e) {
	e.preventDefault();

	if ($(this).next().is(":hidden")) {
		$(this).parent().addClass("on");

	} else if ($(this).next().is(":visible")) {
		$(this).parent().removeClass("on");
	}

	$(this).next().toggle();
});
$(document).ready(function () {

	var flag = 1;
	$("div.search").click(function () {

		if (flag) {
			$("div.search a").css("background-position", "0 -24px");
			flag = 0;
		} else {
			$("div.search a").css("background-position", "0 0");
			flag = 1;
		}
	});
});
/* gnb2 ul */
$(document).ready(function () {

	var flag = 1;
	$(".gnb2 > ul > li.gnb_2_2").click(function (e) {
		e.preventDefault();
		if (flag) {
			$(".gnb2 > ul > li.gnb_2_2 > ul").css("display", "block");
			flag = 0;
		} else {
			$(".gnb2 > ul > li.gnb_2_2 > ul").css("display", "none");
			flag = 1;
		}
	});
});
