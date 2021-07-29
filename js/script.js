$(".AKP").click(function(){ location.href="../AKP.html" });
$(".header__logo").click(function(){ location.href="../index.html" });

$(function(){

	$('.menu__btn').click(function(){
		$('#menu').addClass('active');
		$('body').addClass('lock');
	});


	$('.item-1').click(function(){
		console.log('1');
		$('.for_item-1').toggleClass('active');
	});

	$('.item-1_2').click(function(){
		console.log('1');
		$('.for_item-1_2').toggleClass('active');
	});

	$('.item-1_3').click(function(){
		console.log('1');
		$('.sitebar_item-1_3').toggleClass('active');
	});

	$('.menu-top__close').click(function(){
		$('#menu').removeClass('active');
		$('body').removeClass('lock');
	})
	$('#agreeL').click(function(){
		$(this).toggleClass('active');
	});
	$('#agree_mob_label').click(function(){
		$(this).toggleClass('active');
	});

	$('#agree_prod').click(function(){
		$(this).toggleClass('active');
	});

	$('.btn_2').click(function(){
		$(this).addClass('active');
		$('.btn_1').removeClass('active');
		$('.btn_3').removeClass('active');
	});
	$('.btn_1').click(function(){
		$(this).addClass('active');
		$('.btn_2').removeClass('active');
		$('.btn_3').removeClass('active');
	});
	$('.btn_3').click(function(){
		$(this).addClass('active');
		$('.btn_2').removeClass('active');
		$('.btn_1').removeClass('active');
	});



	$('.btn_w2').click(function(){
		$(this).addClass('active');
		$('.btn_w1').removeClass('active');
		$('.btn_w3').removeClass('active');
	});
	$('.btn_w1').click(function(){
		$(this).addClass('active');
		$('.btn_w2').removeClass('active');
		$('.btn_w3').removeClass('active');
	});
	$('.btn_w3').click(function(){
		$(this).addClass('active');
		$('.btn_w2').removeClass('active');
		$('.btn_w1').removeClass('active');
	});

	$('.akp_btn_2').click(function(){
		$(this).addClass('active');
		$('.akp_btn_1').removeClass('active');
		$('.akp_btn_3').removeClass('active');
	});
	$('.akp_btn_1').click(function(){
		$(this).addClass('active');
		$('.akp_btn_2').removeClass('active');
		$('.akp_btn_3').removeClass('active');
	});
	$('.akp_btn_3').click(function(){
		$(this).addClass('active');
		$('.akp_btn_2').removeClass('active');
		$('.akp_btn_1').removeClass('active');
	});

	$('.open_spoiler').click(function(){
		$('.spoiler_text').toggleClass('active');
		if($('.spoiler_text').hasClass('active')){
			$(this).text("скрыть текст");
		}else{
			$(this).text("раскрыть текст");
		}
		
	})
});

$(document).ready(function(){
	

	let position = 0;

	const track = $('.slider-track');
	const item = $('.slider-item');
	
	const trackW = $('.block_3-track');
	const itemW = $('.block_3__item');

	const trackakp = $('.akp-block_2-track');
	const itemakp = $('.akp-block_2__item');

	const btn1 = $('.btn_1');
	const btn2 = $('.btn_2');
	const btn3 = $('.btn_3');

	const akpbtn1 = $('.akp_btn_1');
	const akpbtn2 = $('.akp_btn_2');
	const akpbtn3 = $('.akp_btn_3');

	const btnw1 = $('.btn_w1');
	const btnw2 = $('.btn_w2');
	const btnw3 = $('.btn_w3');

	const itemWidh = item.width();
	const itemWidhW = itemW.width();
	const itemWidhAkp = itemakp.width();

	console.log(itemWidh);
	console.log(itemWidhW);

	btn2.click(function(){
		position = -itemWidh;
		setPosition();
	});
	btn1.click(function(){
		position = 0;
		setPosition();
	})
	btn3.click(function(){
		position = -itemWidh*2;
		setPosition();
	})

	btnw2.click(function(){
		position = -itemWidhW;
		setPositionW();
	});
	btnw1.click(function(){
		position = 0;
		setPositionW();
	})

	btnw3.click(function(){
		position = -itemWidhW*2;
		setPositionW();
	})

	akpbtn2.click(function(){
		position = -itemWidhAkp;
		setPositionAkp();
	});
	akpbtn1.click(function(){
		position = 0;
		setPositionAkp();
	})

	akpbtn3.click(function(){
		position = -itemWidhAkp*2;
		setPositionAkp();
	})

	const setPosition = () => {
		track.css({
			transform: 'translateX('+position+'px)',
		});
	}

	const setPositionW = () => {
		trackW.css({
			transform: 'translateX('+position+'px)',
		});
	}

	const setPositionAkp = () => {
		trackakp.css({
			transform: 'translateX('+position+'px)',
		});
	}
	setPositionAkp();
	setPosition();
	setPositionW();
	
});
$(window).resize(function(){
	
	let position = 0;

	const track = $('.slider-track');
	const item = $('.slider-item');
	
	const trackW = $('.block_3-track');
	const itemW = $('.block_3__item');

	const trackakp = $('.akp-block_2-track');
	const itemakp = $('.akp-block_2__item');

	const btn1 = $('.btn_1');
	const btn2 = $('.btn_2');
	const btn3 = $('.btn_3');

	const akpbtn1 = $('.akp_btn_1');
	const akpbtn2 = $('.akp_btn_2');
	const akpbtn3 = $('.akp_btn_3');

	const btnw1 = $('.btn_w1');
	const btnw2 = $('.btn_w2');
	const btnw3 = $('.btn_w3');

	const itemWidh = item.width();
	const itemWidhW = itemW.width();
	const itemWidhAkp = itemakp.width();

	console.log(itemWidh);
	console.log(itemWidhW);

	btn2.click(function(){
		position = -itemWidh;
		setPosition();
	});
	btn1.click(function(){
		position = 0;
		setPosition();
	})
	btn3.click(function(){
		position = -itemWidh*2;
		setPosition();
	})

	btnw2.click(function(){
		position = -itemWidhW;
		setPositionW();
	});
	btnw1.click(function(){
		position = 0;
		setPositionW();
	})

	btnw3.click(function(){
		position = -itemWidhW*2;
		setPositionW();
	})

	akpbtn2.click(function(){
		position = -itemWidhAkp;
		setPositionAkp();
	});
	akpbtn1.click(function(){
		position = 0;
		setPositionAkp();
	})

	akpbtn3.click(function(){
		position = -itemWidhAkp*2;
		setPositionAkp();
	})

	const setPosition = () => {
		track.css({
			transform: 'translateX('+position+'px)',
		});
	}

	const setPositionW = () => {
		trackW.css({
			transform: 'translateX('+position+'px)',
		});
	}

	const setPositionAkp = () => {
		trackakp.css({
			transform: 'translateX('+position+'px)',
		});
	}
	setPositionAkp();
	setPosition();
	setPositionW();
	
});